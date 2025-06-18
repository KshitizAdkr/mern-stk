let i=1;

//do-while

do{
    console.log(i);
    i++;
}
while(i <= 5)

//while
i=1;
while(i<=5){
    console.log(i)
    i++
}

while(true){
    if(i>10)
    {
        break;
    }
    console.log(i)
    i++
}

for(i = 1; i <= 10; i++){
    console.log(i)
}

i=1;
for(;;){
    if(i > 10){
        break;
    }
    console.log(i);
    i++;
}

//map is functional loop in js and only executes with array data.
//for of,for in = array data type

/**
 * 
 1  2   3   4   5

 */
//dry run test

for( let i = 1; i <= 5; i++){   //i = 1; i <= 5  =>true
    let toPrint= ""             //toPrint = ""
    for( let j=1 ; j <= i ; j++){  //j=1;j<=5 => true
        toPrint += j+" ";           //toPrint = 1 2 3 4 5
    }                                // j++ => 6,j<=5 => false
    console.log(toPrint)
}

//array
let num = [1,2,3,4,5,6,7,8,9,10]
// let size= num.length;  //size of an array
let sum=0;
//   for(let i =0; i< size; i++){
//     sum += num[i]
//   }

// for(let i in num){     //gives index
//     sum += num[i]
// }

for(let val of num){      //gives value
    sum += val;
}

  console.log(sum)    //55

