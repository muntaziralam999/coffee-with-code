
let myDate=new Date()
// console.log(myDate.toString()) // ye ssare alag alag format hai datees ko dikhane ke liye 
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())   // yaha tak 

// let myCreate=new Date(2023,0,23);           // sate khud se create karne ke liye 
// let myCreate =new Date(2023,3,4,5,6,7)      // date ke sath times bhi create karne ke liye 
// console.log(myCreate.toLocaleString());

// let myCreate1 =new Date("2023-01-14")     // in traike se bhi ham date create kar sakte hai 
// let myCreate2 =new Date("02-12-2023")
// console.log(myCreate1.toLocaleString())
// console.log(myCreate2.toLocaleString())

// let myTimesStamp=Date.now()               // ye time stam ki bahut kam aati hai comapre main ye milisecound main apna output deti hai
// console.log(myTimesStamp)
// console.log(myCreate2.getTime())         //ye date se time nikalne ke liye  miliseound 
// console.log(Math.floor(Date.now()/1000))  // secound main convert karne ke liye 


myDate.toLocaleString('default',{     // ye object hai islye bahut define kar ssakte hai 
    weekday:"long"

})