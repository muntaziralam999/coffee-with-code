//if 

// const temp=41

// if(temp<50){
//     console.log("less than 50")
// }
// else{
//     console.log("temp is grater than 50")
// }

// const score=200

// if(score>100){
//     const power="fly"
//     console.log(`user power ${power}`)
// }


// ham  i parkar se bhi iff ka use kar sakte hai nina premtheses ke 


// const balance=1000;
// // if(balance>500) console.log("test")




// if (balance<500){
//     console.log("less than 500")
// }else if(balance<900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }


// const userLoggedIn=true;
// const debitCard=true
// const loggedinfromGoogle=false;
// const loggedinfromEmail=true

// multiple  condition check isme dono condittion true hona chaiyes


// if(userLoggedIn && debitCard){
//     console.log("allow to buys course")
// }

// imse  same but isme ek condition true hona kam hoajrga 


// if(userLoggedIn || debitCard){
//     console.log("user loggedIN")
// }

// switch case satement  

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month=3

// switch (month) {
//     case 1:
//         console.log("january")
//         break;
//     case 2:
//         console.log("feb")
//         break;
//     case 3:
//         console.log("march")
//         break;
//     case 4:
//         console.log("april")
//         break;

//     default:
//         console.log("default case match")
//         break;
// }




///++++++++++++++++++++++++ truthy and falsey +++++++++++++++++++++++++++++++++++++++++++++++++++

// const userEmail="bk@gmail.com "

// if(userEmail){
//     console.log("got user email")
// }
// else{
//     console.log("dont have user email")
// }

// falsy vales

// false , 0, -0, bigInt  0n, "", null, undefined, NaN

// truthy values
// "0" , 'false'," " empity string, [] empity array , {} empity obj, function(){} empity func,



//  empty array ko check karne ke liye 



// const arr=[]

// if (arr.length===0){
//     console.log("Array is empity")
// }

//  empty object  ko check karne ke liye 

// const obj={}

// if (Object.keys(obj).length===0){
//     console.log("obj is empity")
// }




// nulish coalescing operater (??):null undefined  iska use null aur undefinded ke liye agar koi value aaye to pahle aa jayega 
    // agar pahle wale value ke jagah pe null ya undefined aa jane pe seound value exicute hoga 
let val1;
// val1=5??10

// val1=null??10

val1 =undefined ??15
console.log(val1)

// turnary oprate ++++++++++++++++++++++++++++

const icep=100;

icep<=80 ?console.log("less than 80"):console.log("more than 80")