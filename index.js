// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
const inquirer = require("inquirer");
const fs = require("fs");
const genMd = require("./utils/generateMarkdown.js");


const questions = [
    {
        type: "text",
        name: "title",
        message: "What is your project's title?"
    },
    {
        type: "text",
        name: "description",
        message: "Please enter a description of your project."
    },
    {
        type: "text",
        name: "install",
        message: "Please enter the steps required to install your application"
    },
    {
        type: "text",
        name: "usage",
        message: "Please explain how to use your application with examples."
    },
    {
        type: "text",
        name: "license",
        message: "Please add a license to your project if you have one"
    },
    {
        type: "list",
        name: "colour",
        message: "Please choose a badge colour.",
        choices: ["orange", "green", "red", "blue", "yellow", "purple"]
    },
    {
        type: "text",
        name: "contributing",
        message: "Please give ways others can contribute to this project."
    },
    {
        type: "text",
        name: "tests",
        message: "Please include testing instruction for your application"
    },
    {
        type: "text",
        name: "credits",
        message: "Please enter any collaborators who helped with this project."
    }
]

    function init() {}

    
    
