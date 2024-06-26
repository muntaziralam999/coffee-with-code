// create new promise 

// const promiseone=new Promise(function(resolve,reject){
//     // do and Async task
//     // DB call, cryptography, network call 
    
//     setTimeout(function(){
//         console.log('async task is complete')
//         resolve()
//     },1000)
// })

// promise ke da resolve data ko handle karne ke liye  than ka use kiya jaata hai 

// promiseone.then(function(){
//     console.log("promise consumed")
// })




// // promise ko ham bina varilable ke exixute kar sakte hai 
//     new Promise(function(resolve,reject){
//      setTimeout(function(){
//         console.log('async task 2 is complete')
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("async 2 resolve")
// })





// create new promise   threee 

// const promiseone3=new Promise(function(resolve,reject){
//     setTimeout(function(){
        
//         resolve({username:"chai", email:"mkbabab@exmaple.com"})
//     },1000)
// })

// // resolve main data hai usko handle karne ke liye 

// promiseone3.then(function(user){
//     console.log(user)
//     console.log(user.username)
// })


// create promise no four 


// const promiseone4=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false;
//         if(!error){
//             resolve({username:"chai4", email:"mkbabab@exmaple.com"})
//         }else{
//             reject('Error:Something went Wrong')
//         }        

//     },1000)
// })

// resolve main data hai usko handle karne ke liye 

// promiseone4.then(function(user){
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("the promise rselve or reject")
// })



// create promise no five


// const promiseone5=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"javascript", password:"1234"})
//         }else{
//             reject('Error:Js went Wrong 5')
//         }        

//     },1000)
// })

// resolve main data hai usko handle karne ke liye 

// async function consumepromise(){
//     const responce=await promiseone5
//     console.log(responce);
// }
// consumepromise()


// async function consumepromise(){
//     try{
//         const responce=await promiseone5
//         console.log(responce);
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// consumepromise()



// fetch se laaye gaye data ko async await se handle karne ka trika 

// async function getAlluser(){
//     try {
//         const responce=await fetch('https://api.github.com/users/muntaziralam999')
//         const data=await responce.json()
//         console.log(data)
//     } catch (error) {
//             console.log("E:",error)
//     }
// }

// getAlluser()



fetch('https://api.github.com/users/muntaziralam999')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})