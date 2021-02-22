const inquirer = require("inquirer")



// prompts for managers 'Name', 'ID', 'Email', 'Office Number'
const managerPrompt = () => {
    return inquirer.prompt()

    // menu with option to 'add engineer or intern' or 'finish building team'
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
    .then(secondaryPrompt)
    .then(promptInfo => {
        return generatePage(promptInfo);
    })