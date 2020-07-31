const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create our User model
class User extends Model {
    //Setup method to run on instance data (per user) to chech password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// define table columns and configuration
User.init(
    {
        //Define an id column
        id: {
            // Use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            // This is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
            //Instruct thagt this is the Primary KEY
            primaryKey: true,
            //Turn on auto increment
            autoIncrement: true
        },
        //Define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //Define an email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            //There cannot be any duplicate email values in this table
            unique: true,
            //if allowNull us set to false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        //Define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //this means the password must be at least four characterslong
                len: [4]
            }
        }
    },
    {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            // set up beforeUpdate lifecycle "hook" functionality
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;