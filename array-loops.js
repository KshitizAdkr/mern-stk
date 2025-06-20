// const { use } = require("react");

const userInfo = [
    {
        name: "Kshitiz Adhikari",
        email: "kshitizadhikari8@gmail.com",
        address: "Lalitpur",
        phone: 9806917839
    },
    {
        name: "Sita Sharma",
        email: "sita.sharma@gmail.com",
        address: "Lalitpur",
        phone: 9801234567
    },
    {
        name: "Ram Bahadur Thapa",
        email: "ram.thapa@gmail.com",
        address: "Pokhara",
        phone: 9812345678
    },
    {
        name: "Anil Gurung",
        email: "anil.gurung@gmail.com",
        address: "Biratnagar",
        phone: 9823456789
    },
    {
        name: "Sunita Karki",
        email: "sunita.karki@gmail.com",
        address: "Dharan",
        phone: 9834567890
    },
    {
        name: "Manish Shrestha",
        email: "manish.shrestha@gmail.com",
        address: "Lalitpur",
        phone: 9845678901
    },
    {
        name: "Puja Rai",
        email: "puja.rai@gmail.com",
        address: "Butwal",
        phone: 9856789012
    },
    {
        name: "Ramesh Bhandari",
        email: "ramesh.bhandari@gmail.com",
        address: "Hetauda",
        phone: 9867890123
    },
    {
        name: "Nisha Magar",
        email: "nisha.magar@gmail.com",
        address: "Lalitpur",
        phone: 9878901234
    },
    {
        name: "Bikash Lama",
        email: "bikash.lama@gmail.com",
        address: "Janakpur",
        phone: 9889012345
    }
];

//foreach loop
userInfo.forEach((value, index) => {
    //console.log(value)
    console.log("Name: " +value.name)
    console.log("Email: " +value.email)
    console.log("Address: " +value.address)
    console.log("Phone: " +value.phone)
    console.log("-----------------------------")
})

let numbs = [1, 2, 3, 4, 5]
//return value from inside of loop = map function

let doubleNumbs = numbs.map((val) => {
    return val*2
})
console.log(doubleNumbs)   //[2,4,6,8,10]

//Filter function

let usersFromLalitpur = userInfo.filter((user) => (user.address === "Lalitpur"))
//let usersFromLalitpur = [];
//userInfo.forEach((val) => {
// userInfo.map((val) => {
//     if (val.address === "Lalitpur") {
//         //usersFromLalitpur.unshift(val);   // always at 0 index
//         usersFromLalitpur.push(val);    //at last index
//         //usersFromLalitpur.splice(1, 0, val);   // at index 1
//     }
// })


console.log(usersFromLalitpur);

numbs= [2, 4, 6, 7, 10, 12,14 ,16,18, 20];


let greatest = numbs.reduce((prev, val ) => {
    console.log({prev, val})
    //return undefined;
    //prev += val;
    // for( let i = 0; i < ind; i++ ){
        if( prev > val ){
            return prev;
        }
        else{
        return val;
    }
    
//}
    
    
        
    // if( prev < val ){
    //     return val;
    // }
    // else{
    //     return prev;
    // }}
    //return prev;
})
console.log(greatest)
//console.log(result)  //20

numbs= [22, 4, 79, 7, 10, 12];
let  min=5;

//numbs.push(1, 3,4,5 ,7)
let last = numbs.pop();  //removes last element

// numbs.unshift(1, 0, 1);  //adds element at the beginning
let first = numbs.shift();  //removes first element

numbs.splice(1, 0, 1) //adds element at index 

numbs.slice(3, 5) //returns elements from index 3 to 5 (not including 5) i.e. 3,4

let found = numbs.every((val) => {
    return (val > min);
})

console.log(found)  //true