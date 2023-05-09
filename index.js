//including required packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

//Generate questions array
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
    },
    {
        type: "text",
        name: "github",
        message: "Please enter your github username"

    },
    {
        type: "text",
        name: "email",
        message: "Please enter your email."
    }
]
//write file function
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, err => {
        if (err) console.log(`Something went wrong ${err}`);
    })
}

//run function
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile("README.md", generateMarkdown(data));
    })
}
//call run function
init ();


    
    
