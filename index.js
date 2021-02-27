const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

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
                "Apache","Academic","GNU","MIT","Mozilla","Open Source"
            ]
        },
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
        <h1 class="profile">${data.name}</h1>
        <div class="profile">${data.location}</div>
        <div class="profile">${data.linkedIn}</div>
        <div class="profile">${data.gitHub}</div>
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