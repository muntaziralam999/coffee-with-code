
let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// let myCreate=new Date(2023,0,23);
// let myCreate =new Date(2023,3,4,5,6,7)
// console.log(myCreate.toLocaleString());

// let myCreate1 =new Date("2023-01-14")
// let myCreate2 =new Date("02-12-2023")
// console.log(myCreate1.toLocaleString())
// console.log(myCreate2.toLocaleString())

// let myTimesStamp=Date.now()
// console.log(myTimesStamp)
// console.log(myCreate2.getTime())
// console.log(Math.floor(Date.now()/1000))


myDate.toLocaleString('default',{
    weekday:"long"
    
})