const func1 = (x) => {
    return new Promise((res,rej ) => {
        console.log("I am inside func1");
        if(x) {
            res("I am resolve of func1");
        } else{
                rej("I am reject of func1");
        }
    } );
};


const func2 = (x) => {
    return new Promise((res,rej ) => {
        console.log("I am inside func2");

        if(x) {
            res("I am resolve of func2");
        } else{
                rej("I am reject of func2");
        }
    } );
};

const func3 = (x) => {
    return new Promise((res,rej ) => {
        console.log("I am inside func3");
        if(x) {
            res("I am resolve of func3");
        } else{
                rej("I am reject of func3");
        }
    } );
};

// func1(true)
//     .then((resData) => {
//         console.log(resData)

//         func2(true)
//     .then((resData2) => {
//         console.log(resData2)

        
// func3(true)
//     .then((resData3) => {
//         console.log(resData3)
//     })
//     .catch((exception) => {
//         console.log(exception)
//     })
//     })
//     .catch((exception) => {
//         console.log(exception)
//     })

//     })
//     .catch((exception) => {
//         console.log(exception)
//     })


//chaining of promise
// func1(true)                                     //Validation
//     .then((res1) => {
//         //
//         console.log(res1)
//        return func2(true)       //db query
//     })
//     .then((res2) => {
//         console.log(res2)
//         return func3(true)       
//     })
//     .then((res3) => {
//         console.log(res3)
//     })
//     .catch((exception) => {
//         console.log(exception)
//     })


// // await 
// Add commentMore actions
// const handler = async () => {
//   try {
//     const res1 =await func1(true)
//     console.log(res1)

//     const res2 = await func2(true);
//     console.log(res2)

//     const res3 = await func3(true);
//     console.log(res3);

//   } catch(exception) {
//     console.log(exception)
//   } finally {
//     console.log("I am last line")
//   }
// }

// handler()

const collect = [func1(false), func2(true), func3(true)]


// Promise.all(collect)
// Promise.allSettled(collect)
Promise.race(collect)
  .then((res) => {
    console.log(res)
  })
  .catch((exception) => {
    // 
    console.log(exception)
  })

// appl => import opert 

// order information 
// orderDetail, orderDetail
