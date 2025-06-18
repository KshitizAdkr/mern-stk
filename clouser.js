//if function is defined in another function,then it is called clouser function.
//the inside functionn which is inside function is called higher order functon.
// A functon can take anything as input.
// A function can return anything as output.

const func1 = () => {
    console.log("I am inside function 1")
    let x = 10;
     
    const func2 = (arg) => {
        if(arg) {
            return" I am in true "+arg
        } else{
            return"I am from else"+arg
        }
    }; 
    //func2(true)
    //return true;
    return func2() 
}

let result = func1();
console.log(result('func'))

//const result = func1()
//const result2 = func2(result)