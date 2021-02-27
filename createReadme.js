function createReadme(userInput) {
    return `
<h1> ${userInput.projTitle}</h1>

## Description

${userInput.projDescr}

## Table of Contents

## Installation

${userInput.projInstall}

## Usage

Run the 'node index.js' command in the root directory of the project and then answer the prompted questions.

## License

This application is using an ${userInput.projLicense} license.

## Contributing

${userInput.contributing}

## Tests

${userinput.tests}

## Questions

Find me through GitHub: [${userInput.userName}] (https://www.github.com/${userInput.userName})
    `;
}

module.exports = createReadme;