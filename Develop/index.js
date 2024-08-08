// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'projectInstallation',
        message: 'What are the installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: 'What is the usage information for your project?',
    },
    {
        type: 'list',
        name: 'projectLicense',
        message: 'What is the lisence for your project?',
        choices: ['MIT', 'Mozilla', 'ISC']
    },
    {
        type: 'input',
        name: 'projectContribution',
        message: 'How do other developers contribute to your project?',
    },
    {
        type: 'input',
        name: 'projectTest',
        message: 'What are the testing instructions for your project?',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.table(answers)
        const readmeContent = generateMarkdown(answers);
        console.log(readmeContent)
        writeToFile('README.md', readmeContent)
    })
}

// Function call to initialize app
init();
