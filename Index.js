const inquirer = require("inquirer")
const generatePage = require("./src/page-template");



// prompts for managers 'Name', 'ID', 'Email', 'Office Number'
const managerPrompt = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the managers name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the managers ID #?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the managers email address?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the managers office number?'
    },
     // menu with option to 'add engineer or intern' or 'finish building team'
     {
         type: 'checkbox',
         name: 'finishOr',
         choices: [
             'add engineer or intern?',
             'finish building team'
         ]

     }







])
};

const secondaryPrompt = (promptInfo) => {
    // add enginer? Y/N. If yes 'Name', 'ID', 'Email', 'Github'
    // type: confirm
    // type: input

    // add intern? Y/N. If yes 'Name', 'ID', 'Email', 'Github'
    // type: confirm
    // type: input

}


managerPrompt()
    .then(promptInfo => {
        console.log(promptInfo)
        return generatePage(promptInfo);
    })
    .then(pageHTML => {
        console.log(pageHTML)
    })