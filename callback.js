/**
 * Callback function => Mostly used for event management
 */

const func1 = (cb) => {
    console.log("I am in func1")
    cb()
}

const func2 =() => {
    console.log("I am in func2")     //If there isn't return for func1(func2()),then output will be undefined.
}


func1(func2)
//If func1(func2),then func1 gets executed first,after that func2.
// IF func1(func2()),then func2 first executes,after that func1.
//listen function is used for hosting.

// Function without name is anonymous function.

//Callback function as an argument function.
func1(() => {
    console.log("I am anonymous function")
})


// Callback hell

const fun1 = (func2) => {
    console.log("I am in fun1")
    func2((func4) => {
        console.log("I am in func3")
        func4(() => {
            console.log("I am in func5")
        })
    })
}

const fun2 = (func3) => {
    console.log("I am in fun2")
    func3((func5) => {

        console.log("I am in func4")
        func
    }
)
}


//cfun1(fun2)
// Async => delay
setTimeout(() => {
    console.log("I am execute after 3 seconds")
}, 3000);

setTimeout(() => {
    console.log("I am execute after 2 seconds")
}, 2000);


setTimeout(() => {
    console.log("I am execute after 1 seconds")
}, 1000);

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

//LazyLoading for user engagement.

