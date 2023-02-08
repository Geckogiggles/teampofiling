const fs = require('fs');
const generateProfiles = require('./profile');
const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Manager = require ('../lib/Manager');
const Engineer = require ('../lib/Engineer');
const Intern = require ('../lib/Intern');
    const generateHTML = require('generateHTML');
const { writeFile } = require('fs').promises;
const teamArray = []
    function promptUserforManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'teamName',
                message: 'Tell me your team name!',
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log("Please choose a team name and type it in to continue your 'Team Info' page.")
                    }
                }
            },
            {
                type: 'input',
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
                type: 'input',
                name: 'employeeid',
                message: 'Please insert employee id',
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log('Please provide employee ID to continue.')
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
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
                type: 'input',
                name: 'officeNumber',
                message: "Please provide the project office's phone number.",
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log("Please provide the project office's phone number to continue.")
                    }
                }
            },

        ])
            .then((answers) => {
                const employee = new Manager(answers.name, answers.employeeid, answers.email, answers.officeNumber)
                teamArray.push(employee)
                addTeamMember()
            })
            .catch((error) => {
                console.log(error)
            })
    }
    //functions that will build those respective parts of html and prompts
    function addTeamMember() {
        inquirer.prompt([
            {
                type: 'expand',
                name: 'employee',
                message: "Would you like to add another employee to your team?",
                choices: [
                    {
                        key: 'n',
                        name: 'No-more-employees',
                        value: 'alldone',
                    },
                    {
                        key: 'i',
                        name: 'Intern',
                        value: 'intern',
                    },
                    {
                        key: 'e',
                        name: 'Engineer',
                        value: 'engineer',
                    }
                ]
                    .then((answers) => {
                        if (answers.key === 'n') {
                            return writetoFile();
                        } else if (answers.key === 'i') {
                            return addIntern()
                        } else {
                            return addEngineer()
                        }
                    }
                    )
            }])
    }
    function addIntern() {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'teamName',
                    message: 'Tell me your team name!',
                    validate: (value) => {
                        if (value) {
                            return true;
                        } else {
                            console.log("Please choose a team name and type it in to continue your 'Team Info' page.")
                        }
                    }
                },
                {
                    type: 'input',
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
                    type: 'input',
                    name: 'employeeid',
                    message: 'Please insert employee id',
                    validate: (value) => {
                        if (value) {
                            return true;
                        } else {
                            console.log('Please provide employee ID to continue.')
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
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
                    type: 'input',
                    name: 'School',
                    message: "Please provide name of your school.",
                    validate: (value) => {
                        if (value) {
                            return true;
                        } else {
                            console.log("Please provide the the name of your school to continue.")
                        }
                    }
                },
    
            ])
                .then((answers) => {
                const employee = new Intern(answers.name, answers.employeeid, answers.email, answers.School)
                teamArray.push(employee)
                    addTeamMember()
                })
                .catch((error) => {
                    console.log(error)
                })
    }
    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'teamName',
                message: 'Tell me your team name!',
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log("Please choose a team name and type it in to continue your 'Team Info' page.")
                    }
                }
            },
            {
                type: 'input',
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
                type: 'input',
                name: 'employeeid',
                message: 'Please insert employee id',
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log('Please provide employee ID to continue.')
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
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
                type: 'input',
                name: 'gitHub',
                message: "Please provide your GitHub username.",
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log("Please provide your GitHub username to continue.")
                    }
                }
            },

        ])
            .then((answers) => {
                const employee = new Engineer(answers.name, answers.employeeid, answers.email, answers.gitHub)
                teamArray.push(employee)
                addTeamMember()
            })
            .catch((error) => {
                console.log(error)
            })

    }
    //import generateHTML and then call it and give it teamArray and whatever it returns you pass it into the write file.
    writeFile('./develop', generateHTML(teamArray))
promptUserforManager();
