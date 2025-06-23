const Person = require("./person");

//child, derived class
class Admin extends Person {
    role = "admin";
    organization;
    position;

        //overriding
    constructor(_name) {
        super(_name)
        //this
        console.log("I am in Admin class");
    }

    getName() {
        return "My name is: "+super.getName();
    }
}

module.exports = Admin