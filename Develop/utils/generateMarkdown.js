// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
      break;
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
      break;
     default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'ISC':
      return 'https://opensource.org/licenses/ISC';
    case 'Mozilla':
      return 'https://opensource.org/licenses/MPL-2.0';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  return `##License

This project is licensed under the ${license} License. For more details, see the [license](${link}).
${badge}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}


## Table of Contents
  - [Description](#Description)
  - [Installation Instructions](#Installation)
  - [Project Usage](#Project)
  - [Lisence](#Lisence)
  - [Contribution Instructions](#Contribution)
  - [Testing Instructions](#Testing)

## Description 

${data.projectDescription}

## Installation Instructions 

${data.projectInstallation}

## Project Usage 

${data.projectUsage}

${renderLicenseSection(data.projectLicense)}

## Contribution Instructions

${data.projectContribution}

## Testing Instructions

${data.projectTest}

`;
}

module.exports = generateMarkdown;
