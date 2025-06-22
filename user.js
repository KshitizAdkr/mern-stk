class User{

    name;
    email;
    address;
    phone;
    #password;

     static Role = "admin"; 

// never async
// never an arrow function
constructor(name, email, address, phone, password){
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.#password = password
    } 

    getPassword = () => {
        return this.#password;
    }

    static getRole = () => {
        return this.Role;
    }
}

// console.log(User.getRole())

const userObj = new User("Kshitiz Adhikari", " kshitizadhiakri8@gmail.com", "Lalitpur", 9806917839, "admin123")
console.log(User.getRole())
//console.log(userObj)

// userObj.name = "Kshitiz Adhikari";
// userObj.email = "kshitizadhikari8@gmail.com";
// userObj.address = "Lalitpur";
// userObj.phone = 9806917839;
// userObj.password = "password123";
 

 