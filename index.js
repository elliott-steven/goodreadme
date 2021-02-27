const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where do you live?',
        },
        {
            type: 'input',
            name: 'linkedIn',
            message: 'What is your LinkedIn URL?',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is your GitHub URL?',
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