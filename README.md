# `<Command Line Team Member Updater>`

## Description

This simple command-line application can assist you with your company website's 'team member' pages by allowing a user to input employee information from the terminal, and have the output automatically rendered to a newly generated HTML webpage (to be found in the 'output' folder ). Be sure to add your team member pictures as .png files and drag them into the 'images' folder (within the 'src' folder) and giving it the same name as the name entered for the employee. 

There are blueprint classes for the following team member roles: Manager, Engineer and Intern, (these can of course be easily modified to your specific use case), and after the user is prompted to input their information, they are updated and pushed into your newly created html, ready to be deployed to your company website.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To use this program, first clone this repository and navigate to it in your chosen CLI. You will need to install node from nodejs.org and make sure that you are in the correct folder before installing the dependencies. Those used for this program are jest and inquirer, which you can install via 'npm i jest inquirer', or by simply running 'npm i' in your terminal. You can then run 'node index' to start the application. After answering the questions, a html file will appear in the output folder to be used and deployed as is convenient to you.

## Usage

When a user starts the application via node index, they will be prompted to enter the team manager's:

Name
Employee ID
Email address
Office number

When a user enters those requirements, the user is presented with a menu with the option to:

Add an engineer
Add an intern
Finish building the team

When a user selects the engineer option, the user is prompted to enter the following and then taken back to the menu:

Engineer's Name
ID
Email
GitHub username

When a user selects the intern option, the user is prompted to enter the following and then taken back to the menu:

Intern’s name
ID
Email
School

The email must be a valid format otherwise the user will be prompted to retry using a valid email address. 

When a user decides to finish building their team, they exit the application and the HTML is generated.

This is a sample image of the working application's functionality:

![Screenshot 2023-05-18 at 13 47 12](https://github.com/angelinatech/Node.js-CLI-Team-Updater/assets/130837613/300b67e8-afaa-4283-aadb-364c8459b258)

## Credits

[node.js](https://nodejs.org/en/download) for the creation of the application
[Jest](https://www.npmjs.com/package/jest) is used to run the unit tests
[Inquirer](https://www.npmjs.com/package/inquirer) for the prompted questions
[Google Fonts](https://fonts.google.com/specimen/Simonetta) for the simonetta font
[Tup Wanders'](https://www.cufonfonts.com/font/curvilingus) typeface for the curvilingus font


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The license will be MIT open source, please see documentation for further details.
https://opensource.org/license/mit/

## How to Contribute

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

This project will use the open source contributer covenant. Please see below:

https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md

## Tests

Please see tests section of repository.
