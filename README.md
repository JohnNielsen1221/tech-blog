# The Tech Blog
>A program that allows users to openly post and comment.

## Table of contents
* [General info](#general-info)
* [Installation](#installation)
* [Functionality](#functionality)
* [Screenshots](#screenshots)
* [Status](#status)
* [Link](#link)
* [License](#license)
* [Contact](#contact)

## General info
This app will allow you to create a profile, post to the home page, and comment on other user posts.

## Installation
Steps required to install project and how to get the development environment running:

To generate your Database:

- Clone the repo to your own system.
- Run npm install from the command line in thee root directory
- Login to your MySql through the command line, then run "source db/schema.sql". Exit MySql.
- Invoke the application with "npm start"

You may also just view the working deployment at the heroku link in the Links section.

## Functionality
You will first land on the login page. If you have yet to create a login, you can click "Sign Up" to create a username, login email, and password. Once created you will be automatically logged in and taken to your Dashboard. Here you will see the option to create a new post, and any posts you have created in the past will be listed on this page as well. After creating a post, you will see that posted listed on the Homepage, which you are directed to after clicking "Home". From there you can comment on your sand other users posts by clicking the comments indicator or clicking on the title of the post, where it will also then show all the comments. If you would like to edit or delete your post, you can do so on your personal dashboard by clicking "Edit Post" underneath the post you wish to edit.

## Screenshots
![Tech Screenshot 1](public/screenshots/tech-ss-1.png)

## Status
Project is: _complete_ (for now)

## Links
Respository Link - https://github.com/JohnNielsen1221/tech-blog
Deployed on Heroku - https://sleepy-badlands-17864.herokuapp.com/dashboard


## License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact
Created by John Hayes Nielsen - johnhayesnielsen@gmail.com