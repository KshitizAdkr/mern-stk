/**
 * a. String / Text 
 *    "", '', ``
 */

let a = "123"
let b = '123'
let c = `asdf`

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

/** Number
 * integer, float, bigint
 */

let d = 123
let e = 1.23
let f = 1e23
let numb1 = NaN
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);

/** Boolean 
 * true, false
*/
let g = true
let h = false 
console.log(typeof g)
console.log(typeof h);

/** Null
 * null
 */
let i = null; 
console.log(typeof i)   


/** Undefined
 * undefined
 */
let j;
console.log(typeof j)

/*** Derived */
/** 
 * Array 
 * - collection of data of any type
 * - every elements are separated by comma(,)
 * - Every elements are arranged in index value pair starting with 0 as first index,
 * - enclosed within []
 * 
 * // two types
 * - single dimensional 
 * - multi domensional
 * */
let k = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(k[4])     // 5


let l = [1,2,3,4,5, ['a','b','1',true]]



// hr system 
// 1 employee
// let name = "Employee Name"
// let address = "Kathmandu"
// let phone = 9876543210
// let email = "one@employee.com"

let employee_1 = ["Employee Name", "Kathmandu", 9876543210, "one@employee.com"]

let allEmployee = [
  ["Employee Name", "Kathmandu", 9876543210, "one@employee.com"],
  ["Employee 2", 9878909878, "Lalitpur", "two@employee.com"],
  ["Employee 3", "Bhaktpur", 9876543456, "three@employee.com"],
];



console.log(allEmployee[0][1]);   // Kathmandu
console.log(allEmployee[1][1]); // 9878909878
console.log(allEmployee[2][1]);   // 9878909878

/** Object/JSON */
/**
 * -{ elem, }
 * - in key:value
 */

let userObj = {
  name: "Employee Name", 
  phone: 9876543210, 
  address: "Kathmandu", 
  email: "one@employee.com"
}

let allData = [
  {
    name: "Employee Name",
    phone: 9876543210,
    address: "Kathmandu",
    email: "one@employee.com",
  },
  {
    name: "Employee Two",
    phone: 9887760987,
    address: "Lalitpur",
    email: "two@employee.com",
  },
  {
    name: "Employee Three",
    phone: 9878098798,
    address: "Bhaktapur",
    email: "three@employee.com",
  },
];



console.log(allData[0].name);
console.log(allData[0]["phone"]);
console.log(allData[0].address);
console.log(allData[0].email);

console.log(userObj.name);
console.log(userObj['address']);


/** Function **/

/** Symbol, Set */