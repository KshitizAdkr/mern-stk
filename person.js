class Person {
    #name;
    email;
    address;
    phone;

    constructor(_name) {
        this.#name = _name;
        console.log("I am in person class")
    }

    getName() {
        return this.#name
    }
}

module.exports = Person