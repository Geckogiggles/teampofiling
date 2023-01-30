const fs = require ('fs');
const generateProfiles = require ('./profile');
const inquirer = require ('inquirer');
const { writeFile } = require('fs').promises;
const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'teamName',
            message: 'Tell me your team name!',
            validate:(value) => {
                if (value) {
                    return true;
                    } else {
                        console.log("Please choose a team name and type it in to continue your 'Team Info' page.")
                    }
                }
        },
        {
            type:'input',
            name: 'name',
            message: "What is your team manager's name?",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    console.log("Please enter the project manager's name to continue.")
                }
            }
        },
            {
                type:'input',
                name:'employeeid',
                message:'Please insert employee id',
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log('Please provide employee ID to continue.')
                    }
                }
            },
            {
                type:'input',
                name:'email',
                message: "Please provide the project manager's email address.",
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log("Please provide the project manager's email address to continue.")
                    }
                    }
            },
            {
                type:'input',
                name:'officeNumber',
                message: "Please provide the project office's phone number.",
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log("Please provide the project office's phone number to continue.")
                    }
                    }
            }
        ]);

    }

