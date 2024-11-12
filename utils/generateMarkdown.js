// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.name}

## Description
${data.description}

## Problem Solved
${data.problem}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing === 'Yes' ? 'Contributions are welcome!' : 'Contributions are not accepted at this time.'}

## License
${data.license ? `This project is licensed under the ${data.license} license.` : 'No license provided.'}

## GitHub
${data.GitHub}

## Contact
${data.contact}

## Acknowledgments
${data.acknowledgments}

## License Badge
${renderLicenseBadge(data.license)}

This project is licensed under the ${data.license} license.
`;
}

export default generateMarkdown;









