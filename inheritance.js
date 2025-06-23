//variable and functions lai camel case ma lekhne
//pascal case ma class lai lekhne
// A=> B => C => D
// A<= B <= C <= D

//const Admin = require("./admin")

class Person {
    name;
    email;
    address;
    phone;

    // constructor() {
    //     console.log("I am in person class")
    // }
}

class Admin extends Person {
    role = "admin";
    organization;
    position;
    constructor() {
        super()
        //this
        console.log("I am in Admin class");
    }
}


const admin = new Admin()
admin.name = "Kshitiz Adhikari"

