// Declartion/Definition
// Function body
// Function Execution
// Function Call


// Name
// Paramteres(receive arghuments)
// Body
// Return
// Call(send arguments)


// Function declaration
 function addNumbers(a, b){
    //body
    let c = a + b
    //return (value only in JS)
    return c;
 }
    let result = addNumbers(10, 20)
    console.log(result)


 //(Second Way) Another method for function declaration
 const addTwoNumbers = function(a, b){
    return a + b
 }
    console.log(addTwoNumbers(10,20))

 //Third way
 //arrow function(mostly used)
 const addNumbers1 = (a, b) => {
    return a + b
 }


 const userInfo = {
    // less used inside object getName: () => {},
    //getEmail: function() {}
    addTwoNumbers: function(a, b) {
        return a + b
    }
 }

 console.log(userInfo,addTwoNumbers(10,20))
 //userInfo.getEmail()
