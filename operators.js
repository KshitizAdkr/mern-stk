let e= '10';
let f= 10;
let g=e+f;

let h= e-f;
console.log(g)  //1010
console.log(h)

/**Comparision Operators
 * <,>,<=,>=
 * except === or triple,all other compares the value ,not the data
 */

let i=10;
let j= '10';
console.log(i<j) //false
console.log(i <=j) //true
console.log(i == j)//true
console.log( i===j) //false
 /**Logical operators
  * &&,||,!
  * if one is true,every else is true in 'or' gate
  * if one is false,every else if false in 'and' gate
  */
 console.log(true && true && true) //true
 console.log(true && false && true) // false
console.log(!true) // false
console.log(!false) //true

/**Conditional Operator
 * (expression) ? true : false
 */

let result = (x>=10) ? "X is greater than or equal to 10":" X is less than 10";


/**
 * NUll colleaching
 * value ?? default value
 */

let user = {
    email: "admin@info.com"
}
 //let emailData=user.email ? user.email :noreply@info.com"
let emailData= user.email ?? "noreply@info.com"

// input value={user.email; ?? null}>/

/**
 * Template Litreal
 * `${jsCode}`
 */

let uName= "kshitiz";
let uEmail = "kshitiz@adhikari.com";

//let emailTemplate = "Dear "+uName+", Thank you for registering.";
//emailTemplate += "Your account has been registered with email."+uEmail+" "
//emailTemplate += " PLease login to continue with us."

let emailTemplate=`Dear ${uName}, Thank you for registering.
                                   Your account has been registered with email ${uEmail}.
                                   Please login to continue with us.`
console.log(emailTemplate)

//Create a js object assign,name,email,phone and address of yours.
//Print it in a single string structure using template literal. Specifying your name,email,address and phone

const userInfo = {
    name:   "Kshitiz",
    email:  "Kshitiz@Adhikari.com",
    phone:  9806917839,
    address:"Butwal" 
}
let templatetoPrint = `
    Name: ${userInfo.name}
    Email: ${userInfo.email}
    Phone: ${userInfo.phone}
    Address: $
`
console.log(templatetoPrint)

/**destructive
 * 
 */

//let fullName = ["Kshitiz","Adhikari"]
//let FirstName = fullName[0]
//let lastname = fullName[1]

//Array Destructure
let [FirstName , LastName, phone] = ["Kshitiz","Adhikari",9806917839]
console.log(FirstName,LastName,phone)

const userInfo1 = {
    name:   "Kshitiz",
    email:  "Kshitiz@Adhikari.com",
    phone:  9806917839,
    address:"Butwal" 
};

let {name:fullName, address} =userInfo1
console.log(fullName)

/**
 * Spread and Rest
 *  ...
 * spread copies the value
 */

let product = {
    pName:" Product One",
    pPrice: 12345,
    pDiscount: 10,
    pCategory: "Phone",
    PDescripton: "This is a phone",
    pBrand: "Nokia"
}
//copy
//sallow,deep

let product_1 = {
    ...product
}
console.log(product);
product_1.pName="New Product"

console.log(product);   //pName => New Product

//
// let filter ={
//     id:1
// };
// filter = {
//     ...filter
//     data: ""
// }

// filter ={
//     ...filter,
// }

let{pName, pPrice ,PDescripton, ...remaining} = product;