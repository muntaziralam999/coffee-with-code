// this keyword ka use in object

// const user={
//     username:"hitesh",
//     price:999,

//     welcomeMessage:function(){
//         console.log(`${this.username} welcome to webside`)
//         console.log(this)
//     }
  
// }
// user.welcomeMessage()
// user.username="sami"
// user.welcomeMessage()

// console.log(this)

//+++++++++++++++++this keyword k use function ke ander++++++++++++++++

// function chai(){
//     let username ="hitesh"
//     console.log(this.username)
// }

// chai()



//++++++++++++++++Arrow Function ++++++++++++++++

const chai=()=>{
     let username ="hitesh"
     console.log(this.username)
    }
//chai()


// const addttow=(num1,num2)=>{     // arrow funtion ka simole syntax
//     return num1+num2
// }

// console.log(addttow(3,4))



// const addttow=(num1,num2)=> num1+num2    // arrow func ka ek aur syntax without pranthices

// const addttow=(num1,num2)=> (num1+num2)  // arrow func ka ek aur syntax 

const addttow=(num1,num2)=> ({username:"hitesh"})  // arrow funct ke ander object 
    
console.log(addttow(3,4))