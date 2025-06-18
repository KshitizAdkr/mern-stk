 // const addNumber = (a, b) => a+b;  //one liner arrow functions
 
 const calculator = () => {
        sum = a + b;
        sub = a - b;
        mul = a * b
        div = a / b
        mod = a % b
        //return c;
    }
 //If there are many paramters in comapriosion to arguments,it will ignore else.

    let a = 10;
    let b = 20;
    let sum;
    let sub;
    let mul 
    let div
    let mod 

    calculator()
    console.log(sum,sub,mul,div,mod)
    // const result= addNumbers()
    // console.log(result);


  //Develop a function in js to convert degree celcius to farenheight
  // f= c*9/5 + 32;  

//One way
//   const convert = () => {
//     f= c*9/5 + 32;
//   }

//   let c = 100;

//   convert()
//   console.log(f)

//const convert = (c) => c*9/5 + 32;

//Wasting : using function and var,declration wil be at top
getName();
console.log(abc)
var abc;
function getName() {
    console.log(" I am inside Getname")
}


//Function types
// Clauser
// callback
// async
// recursive

// 1-10 but without using loop using custom function

const sum1 = (i=1) => {
    console.log(i)
    i++
    if ( i <= 10 ){
        sum1(i);
    }
}

sum1()


//Daraz category List
/**
 * electronics
 *      electrical appliances
 *          Fridge
 *          television
 *              smart televison
 *                  IP Tv
 *                  Android TV
 * 
 * Clothing
 *      Men's Fashion
 *      Women's Fashion
 *      Kid's Fashion
 * Grocery
 */

// const categories = [
//     {
//         name: "Electronics",
//         children: [
//             {
//                 name: "Electronical appliances",
//             },
//             {
//                 name: "Television",
//                 children: []
//             },
//             {
//                 name: "Smart Television"
//             }
        
//         ]
//     },
//     {
//         name: "clothing",
//         children: [
//             {
//                 name: "Men's Fashion",
//             },
//             {
//                 name: "Women's Fashion",
//                 children: [],
//             }
//         ]
//     }
//     {
        
//     }
// ]


const categories = [
    {
      name: "Electronics",
      children: [
        {
          name: "Electrical Appliances",
          children: [
            {
              name: "Fridge",
              children: null
            }
          ],
        },
        {
          name: "Television",
          children: [
            {
              name: "Smart Television",
              children: [
                {
                  name: "IP Tv",
                  children: null
                },
                {
                  name: "Android Tv",
                  children: null
                }
              ]
            }
          ],
        },
      ],
    },
    {
      name: "Clothing",
      children: [
        {
          name: "Men's Fashion",
          children: null,
        },
        {
          name: "Women's Fashion",
          children: null,
        },
        {
          name: "Kid's collection",
          children: null
        },
      ],
    },
    {
      name: "Grocery",
      children: null,
    },
  ];
  
  
  let categ = [
    {
      name: "Electronics",
      children: [
        {
          name: "Electrical Appliances",
          children: [
            {
              name: "Fridge",
              children: null,
            },
            {
              name: "Smart Television",
              children: [
                {
                  name: "IP Tv",
                  children: null,
                },
                {
                  name: "Android TV",
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Clothing",
      children: [
        {
          name: "Men's Fashion",
          children: null,
        },
        {
          name: "Women's Fashion",
          children: null,
        },
        {
          name: "Kid's collection",
          children: null,
        },
      ],
    },
    {
      name: "Grocery",
      children: null,
    },
  ];
  


const printCats = ( cat , i = 1 ) =>  {
  if (cat) {
      space += 1
      for(let cat1 of cat){
        console.log("\t",repeat(space)+cat1.name)
        printCats(cat1.children, space)
      }
  }
}





  for(let cat of cats) {
    console.log(cat.name)
    printCats(cat.children)
  }  
    
  //   if(cat.children) {
  //     for(let cat1 of cat.children ) {
  //       console.log("\t", cat1.name)
  
  //       if(cat1.children) {
  //         for(let cat2 of cat1.children) {
  //           console.log("\t\t", cat2.name)
  
  //           if(cat2.children) {
  //             for(let cat3 of cat2.children) {
  //               console.log("\t\t\t", cat3.name)
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }




  //Day-2

  //url => slug


  //Task is to do all these operations in recursive format
  