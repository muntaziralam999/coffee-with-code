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





// create new promise  threee  resolve ke ander koi data hai usko handle karne tarika 
 
// const promiseone3=new Promise(function(resolve,reject){
//     setTimeout(function(){
        
//         resolve({username:"chai", email:"mkbabab@exmaple.com"})
//     },1000)
// })

// // resolve main data hai usko handle karne ke liye function ander user main uske data store kar rahe hia

// promiseone3.then(function(user){
//     console.log(user)
//     console.log(user.username)
// })


// create promise no four  reseolve aur reject dono hadle karte hai jis parkar than resolve data ko handle karta hai usi 
// usi parkar reject ke data ko catch hadle karta hai 


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

// resolve reject data ho handle ka rahe hai th promise ki chaining bhi kar rahe hai aur last main final ka use kar arhe hai 
// basicly faninaly kya karta hai code reject ho resolve dono main aapko inform karta hai ki code execute hu hai ya nhi 

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



// create promise no five  promise ko Asnc await ke dawar hanle karne ka tarika 


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

// basiclly Async await bhi jo data asyncrolly aaata hai usi ko handle karta hai thana aur catch ke throw isme 
// thora sa change hai ki code ko thora sa rok ke kam karta hai 

// async function consumepromise(){
//     const responce=await promiseone5
//     console.log(responce);
// }
// consumepromise()


// agar asyc await ko main eror aata hai to usko handle karne ke try aur catch ka use kiya jaata hai 


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


// api se fetch kiye gaye data ko then aur catch se handle karne ka trika 

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