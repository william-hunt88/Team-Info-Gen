const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, github);
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }

  getGitHub() {
    return this.github;
  }

  //overridden to return 'Engineer'
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
