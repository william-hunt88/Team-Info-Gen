const Employee = require("./Employee")

class Intern extends Employee {
    constructor (school) {
        this.school = school
    }

    getSchool() {

    }

    // Overridden to return Intern
    getRole() {

    };
};