const inquirer = require("inquirer");
const employees = [];
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require('fs')
const createHtml = require('./src/page-template.js')
const path = require('path')
      
const mock = [

]


// prompts for managers 'Name', 'ID', 'Email', 'Office Number'
function managerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the managers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the managers ID #?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the managers email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the managers office number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      employees.push(manager);
      secondaryPrompt();
    });
}

function secondaryPrompt() {
  inquirer
    .prompt({
      type: "list",
      name: "whatNext",
      message: "What would you like to do next?",
      choices: ["add engineer", "add intern", "finish building team"],
    })
    .then((answer) => {
      switch (answer.whatNext) {
        case "add engineer":
          engineerPrompt();
          break;
        case "add intern":
          internPrompt();
          break;
        default:
          buildTeam();
      }
    });
}

function engineerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineers ID #?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineers email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineers github username?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      employees.push(engineer);
      secondaryPrompt();
    });
}

const internPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the interns name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the interns ID #?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the interns email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the interns alma mater?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      employees.push(intern);
      secondaryPrompt();
    });
};


function buildTeam () {
    fs.writeFileSync("./dist/team.html", createHtml(employees))
    copyFile()
};

function copyFile () {
  fs.copyFileSync("./src/style.css", "./dist/style.css")
};




managerPrompt();

