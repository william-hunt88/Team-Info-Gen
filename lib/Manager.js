const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email, officeNumber)
        this.name = name;
        this.id - id;
        this.email = email;
        this.officeNumber = officeNumber;


    }

    //overriden to return manager
    getRole() {

    };
};

module.exports = Manager