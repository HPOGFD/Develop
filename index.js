import inquirer from "inquirer";
import colors from "colors";
import fs from "fs";
import generateMarkdown from './utils/generateMarkdown.js';

// Create an array of questions with validation for required fields
const questions = [
  {
    type: 'input',
    name: 'title',
    message: colors.brightMagenta('What is your project name?'),
    validate: function(input) {
      if (input.trim() === '') {
        return 'Project title cannot be empty. Please provide a title.';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'description',
    message: colors.brightMagenta('Can you provide a brief description of the project?'),
    validate: function(input) {
      if (input.trim() === '') {
        return 'Description cannot be empty. Please provide a description.';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'problem',
    message: colors.brightMagenta('What problem does this project solve?'),
    validate: function(input) {
      if (input.trim() === '') {
        return 'Please provide the problem this project solves.';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: colors.brightMagenta('What are the steps to install and set up this project?'),
    validate: function(input) {
      if (input.trim() === '') {
        return 'Installation steps cannot be empty. Please provide installation instructions.';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: colors.brightMagenta('How do you use this project?'),
    validate: function(input) {
      if (input.trim() === '') {
        return 'Usage instructions cannot be empty. Please provide usage details.';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'contributing',
    message: colors.brightMagenta('Do you welcome contributions to the project? (Yes/No)'),
    validate: function(input) {
      if (input.trim() === '') {
        return 'Contribution guidelines cannot be empty. Please provide contribution details.';
      }
      return true;
    }
  },
  {
    type: 'list',
    name: 'license',
    message: colors.brightMagenta('Which license is this project under?'),
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    validate: function(input) {
      if (!input) {
        return 'Please select a license for the project.';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'GitHub',
    message: colors.brightMagenta('Enter your GitHub username:'),
    validate: function(input) {
      if (input.trim() === '') {
        return 'GitHub username cannot be empty. Please provide a valid username.';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'contact',
    message: colors.brightMagenta('Enter your email address:'),
    validate: function(input) {
      if (input.trim() === '') {
        return 'Email address cannot be empty. Please provide your email.';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'acknowledgments',
    message: colors.brightMagenta('Do you want to acknowledge any libraries, tools, or people?'),
    validate: function(input) {
      if (input.trim() === '') {
        return 'Acknowledgments cannot be empty. Please provide any acknowledgments or type "None".';
      }
      return true;
    }
  }
];

// Function to write the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log("README file created successfully!"));
}

// Function to initialize the app
function init() {
  inquirer.prompt(questions)
    .then((responses) => {
      const readmeContent = generateMarkdown(responses); // Generate markdown content
      writeToFile("GENERATEDREADME.md", readmeContent); // Write to README.md
    })
    .catch((error) => console.error(error));
}

// Function call to initialize the app
init();
