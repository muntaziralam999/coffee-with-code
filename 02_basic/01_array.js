const myArr=[0,1,2,3,4,5,6,7]

const myHeros=["ironman","hulk","thor",]


const myArr2=new Array(1,2,3,4,5) // dura trika array ko declare karne ka 

// Array mehods

myArr.push(6)    // array ke end main data ko leke add kar deta hai 
console.log(myArr)

myArr.pop() // array ke last value remove karne ke liye 

myArr.unshift(9) // array ke satart main data koa add karne ke liye 
myArr.shift()   // start se remove kar deta hai 

console.log(myArr.includes(9)) // ye array ke question metthos ye hame batayega ki array ke ye 9 hai ya nhi true aur false main ans dega
console.log(myArr.indexOf(9)) // ye 9 ki index puch rah hai 

const newArr=myArr.join("-")  // ye string main conver bhi karta hai aur sath main isko sperate bhi karta hai alag alag type main
console.log(newArr);

console.log("A",myArr);
const myn1=myArr.slice(1,3)  // arrya ke bich se index from se to tak cut karke ek alag array bana deta hai lekin last wala include nhi hota hai 

const myn2=myArr2.splice(1,3)// ye  bhi ek naya array janrate karta hai but isme diffrent ye hai ki ye hamre purane array ko hi
                            // manuplate kar deta hai jo data nikal ke hamne ney array banaya hai usko purane se gayeb kar deta hai 
