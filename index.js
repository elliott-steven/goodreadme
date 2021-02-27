const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const createReadme = require("./createReadme")

inquirer
    .prompt([
        {
            type: 'input',
            name: 'projTitle',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'projDescr',
            message: 'Write a short description of your project:',
        },
        {
            type: 'input',
            name: 'projInstall',
            message: 'What is the installation process:',
        },
        {
            type: 'list',
            name: 'projLicense',
            message: 'Choose the appropriate license for your project:',
            choices: [
                "Apache", "Academic", "GNU", "MIT", "Mozilla", "Open Source"
            ]
        },
        {
            type: "input",
            name: "userName",
            message: "What is your GitHub username? "
        },
        {
            type: "input",
            name: "userEmail",
            message: "What is your email? "
        }
    ])

    .then(function (data) {
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <link rel="stylesheet" type="text/css" href="./style.css">
        </head>
        <body>
        <h1 class="profile">${data.projTitle}</h1>
        <div class="profile">${data.projDescr}</div>
        <div class="profile">${data.projInstall}</div>
        <div class="profile">${data.projLicense}</div>
        <div class="profile">${data.userName}</div>
        <div class="profile">${data.userEmail}</div>
        <script type="text/javascript" src="script.js"></script>
        </body>
        </html>  
    `;
        fs.writeFile('index.html', html, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log('Success!');
        });
    });