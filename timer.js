//Time-Delay

// setTimeout(() => {
//     console.log("I am at top of file");
// } ,3000)
// let i=1;
// setInterval(() => {
//     console.log("value of i",i)
// }, 1000)

// setInterval(() => {
//     let date = new Date()
//     const hour = date.getHours()
//     const minute = date.getMinutes()
//     const second = date.getSeconds()
//     console.log(hour+":"+minute+":"+second)
// }, 1000)


// console.log("I am first line");
// console.log("I am second line");
// console.log("I am third line");
// console.log("I am fourth line");
// console.log("I am fifth line");


//Promise
//Fulfill or Reject , one at a  time, both are callback functions

const prom = new Promise((resolve, reject) => {
        //success
        resolve({msg: "I am resolved"})
        //reject({reason: "I am rejected"})
})

//if any function is returning a promise, it's always asynchronous
const func = () => {
    return new Promise((res, rej) => {
        //logic here
        res("data")
})
}


//
const func2 = async () => {   //retrun is promise
    //return "value"    //resolve
    //throw " Reject "    //exception
}

const handler = async() => {
    //await func2()  //await needs aynchronous function

    // let result = await func2()  
    // .catch((exception) => {

    // })


    try{
        let result =await func2()
    }
    catch(exception){
        console.log(exception)
    }
}


// prom
//     .then((resolvedData) => {
//         console.log(resolvedData)
//     })
//     .catch((exception) => {
//         console.log(exception)
//     })


// func()
//     .then()
//     .catch()

console.log("I am last line")

