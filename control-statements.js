/**
 * Decision making statements
 * a. if-else
 * b. else-if
 * c. switch case
 * 
 * loop
 * i. do-while
 * ii. while
 * iii. for
 * iv. for-in
 * v. for-of
 */

let day = "Sunday";
//truthy value => if block
//falsy value  => else block
    //fasle, o, null, undefined, empty variables, NaN
//let day = prompt("Enter the value for day: n")
if(day === "Saturday" || day === "Sunday"){
    console.log("Holiday")
} else{
    //optional
    console.log("Weekday")
}

let x= 0;  //undefined
if(x) {
    //
}
else{
    //run
}


//day= "Sunday" //Saturday
//other="weekday"

if(day === "Sunday" || day === "Saturday"){
    console.log("Holiday")
}
else if(day === "Friday")
{
    console.log("Weekend")
}
else{
    console.log("Weekday")
}

if(day === "Sunday" || day === "Saturday"){
    console.log("Holiday")
}

switch(day){
    case "Sunday":
        console.log("Holiday");
        break;
    case "Saturday":
            console.log("Holiday");
            break;
    case "Friday":
            console.log("Weekend");
            break;
    default:
            console.log("Weekday")
            break;
}


// x = true;
// switch(x){
//     case true:
//     //
//     break;
//     case false;
//     //
//     break;
// }

let studentInfo = {
    percentage: 70
}

switch(true){
    case( studentInfo.percentage >= 60):
        console.log("First Divison");
        break;
    default:
        console.log("Not a first Division");
        break;
}

let y = 10;
if(true){
    y=20
}
console.log(y)  // if let y inside if ,op will be 10,if  not,20.

//In js,create an object data names as household.
//Assign name and unitconsumed as a number.(350)
//Calculate the bill to be paid if,the amount to be calculated is as follow:
//if unitsconsumed is less than or equal to 20 => amount to be paid is Npr. *0
//for the next 20 units,a rate of Npr. 5/unit is applied.
//for next 30,7.5
//for 50,10
//for 100,15
//for 100,20
//for 200,27
//what will be amount to be paid


const household = {
    name : "KAI",
    unitConsumed : 350,
}
// if(unitConsumed <= 20){
//     amount = 80;
// }
// else if{

// }
let bills=0;
if(household.unitConsumed <= 20){
        bills=80;    
}
else if(household.unitConsumed <= 40){
    bills= 80+ (household.unitConsumed - 20) * 5;
}
else if(household.unitConsumed <= 70){
    bills= 80+ 20*5 + (household.unitConsumed - 40) * 7.5;
}
else if(household.unitConsumed <= 120){
    bills= 80+ 20*5 + 30*7.5 + (household.unitConsumed - 70) * 10;
}
else if(household.unitConsumed <= 220){
    bills= 80+ 20*5 + 30*7.5 + 50*10 + (household.unitConsumed - 120) * 15;
}
else if(household.unitConsumed <= 320){
    bills= 80+ 20*5 + 30*7.5 + 50*10 + 100*15 + (household.unitConsumed - 220) * 20;
}
else if(household.unitConsumed <= 520){
    bills= 80+ 20*5 + 30*7.5 + 50*10 + 100*15 + 100*20 + (household.unitConsumed - 320) * 27;
}
else{
    bills= 80 + 20*5 + 30*7.5 + 50*10 + 100*15 + 100*20 + 200*27 + (household.unitConsumed - 320) * 30;
}
console.log("Bills to be paid: Npr.",bills)










