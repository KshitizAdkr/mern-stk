//Polymorphism, encapsulation, abstraction, inheritance

//Class
   //Data (member variables)
   //Methods/ functions
// object
// Prototype based app

//Pascal case: UserInfoName
// Camel case: userInfoName
// Snake case: user_info_name

function UserInfo(_name, _address){
    this.name = _name
    this.address = _address
}


UserInfo.prototype.getName = function() {
    return "My name is: " + this.name
}

const userInfoObj = new UserInfo("Kshitiz", "Kathmandu")
console.log(userInfoObj.getName())