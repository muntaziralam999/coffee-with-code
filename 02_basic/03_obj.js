// singleton 

// object literals
const mySym=Symbol("key1")

const jsUser={
    name:"hitesh",
    "full name":"hitesh choudhary",
    [mySym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn: false,
    latsLoginDays:["Monday","Saturday"]
}

console.log(jsUser.age)  // data ko  assec karne ka trika 

console.log(jsUser["email"])  // data ko assec karne ka ek aur tarika

console.log(jsUser["full name"]) // agar ham key main space ke sath diye hai to hame is parkar hi acces karna prega 

console.log(typeof(jsUser[mySym]))

jsUser.email="hit@gmail.com"  // value chane karne ke liye 

// Object.freeze(jsUser);      // ye obj ke is key freex kar dega chane karne se chane nhi hoga 

console.log(jsUser)

jsUser.greet=function(){   // object ander function dene ke liye 
    console.log("hello js user ")
}

console.log(jsUser.greet()) // function ko acces karne ka trika

jsUser.greet2=function(){  // function usi obj ke key ko use karne ke liye this kryword ka use karte hai this keyword se pura obj ka 
                                    // acces mil jata hai 
    console.log(`hi user ${this.name}`)
}

console.log(jsUser.greet2())