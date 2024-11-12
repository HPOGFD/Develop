// TODO: Include packages needed for this application
import inquirer from "inquirer";
import colors from "colors";
import fs from "fs";
import generateMarkdown from './utils/generateMarkdown.js';


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'name',
      message: colors.brightMagenta('What is your project name?'),
    },
    {
      type: 'input',
      name: 'description',
      message: colors.brightMagenta('Can you provide a brief description of the project?'),
    },
    {
      type: 'input',
      name: 'problem',
      message: colors.brightMagenta('What problem does this project solve?'),
    },
    {
      type: 'input',
      name: 'installation',
      message: colors.brightMagenta('What are the steps to install and set up this project?'),
    },
    {
      type: 'input',
      name: 'usage',
      message: colors.brightMagenta('How do you use this project?'),
    },
    {
      type: 'input',
      name: 'contributing',
      message: colors.brightMagenta('Do you welcome contributions to the project? (Yes/No)'),
    },
   
    {
      type: 'list', 
      name: 'license',
      message: colors.brightMagenta('Which license is this project under?'),
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'GitHub',
      message: colors.brightMagenta('Enter your GitHub username:'),
    },
    {
      type: 'Email',
      name: 'contact',
      message: colors.brightMagenta('Enter your email address?'),
    },
    {
      type: 'input',
      name: 'acknowledgments',
      message: colors.brightMagenta('Do you want to acknowledge any libraries, tools, or people?'),
    }
  ];
  

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log("README file created successfully!"));
}

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
      .then((responses) => {
        const readmeContent = generateMarkdown(responses); // Generate markdown content
        writeToFile("GENERATEDREADME.md", readmeContent); // Write to README.md
      })
      .catch((error) => console.error(error));
  }
  

// Function call to initialize app
init();
