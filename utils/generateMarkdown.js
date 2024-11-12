// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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

## Screenshot
${data.screenshot ? `![Screenshot](${data.screenshot})` : 'No screenshot provided.'}

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
`;
}


export default generateMarkdown;

