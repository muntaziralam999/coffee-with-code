// const tinderUser=new Object()

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="samm"
tinderUser.isloggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            firstname:"hitesh",
            lastname:"choudhry"
        }
    }
}
// console.log(regularUser.fullname.userFullname.firstname)

const obj1={1:"A",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}   // isse aray ander aray ko kar dega 

const obj3=Object.assign({},obj1,obj2) // mutiple array ko merge karne ke liye 

console.log(obj3);

const pobj4={...obj1,...obj2}    // ye bhi multiple array ko merge karne ke liye 

console.log(Object.keys(tinderUser)); // object ander ke sare key ko nikalne ke liye
console.log(Object.values(tinderUser)); // object ke ander ke sare value ko niklne ke liye 

console.log(Object.entries(tinderUser)); // key aur value ko array main convert karke alag alag krke deta hai

console.log(tinderUser.hasOwnProperty("islogged"))// ye ham object se puch rahe aapke pass ye wali properties hai kya 