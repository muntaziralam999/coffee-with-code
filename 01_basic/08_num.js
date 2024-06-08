const score=400
const balcnce=new Number(100)
console.log(balcnce);
console.log(score);

console.log(balcnce.toString()) // string main convert karne ke liye taki string ke method ko apply kar sake 
console.log(balcnce.toFixed(2)) // number aage point(.) deke zero dene ke liye  

const othNUmber=23.8966;  // 
console.log(othNUmber.toPrecision(3));

const hun=100000;
console.log(hun.toLocaleString()) // defaul value us value ke hisab se 

console.log(hun.toLocaleString('en-iN')) // indian ke hisan se

//+++++++++++++++++++++maths++++++++++++++++++++++++++++++

console.log(Math) // iske sare prototype hame milnge browser ke console pe 

console.log(Math.abs(-4))

console.log(Math.round(4.3))

console.log(Math.ceil(4.3))

console.log(Math.floor(4.3))

console.log(Math.min(4,5,6,7,2,3,))

console.log(Math.max(4,5,6,7,2,3,))

console.log(Math.random()) // 0 se 1 ke bich random number janrate karta hai
console.log(Math.random()*10) // usko hamne 10 se multyoly kar diya hai
 
console.log((Math.random()*10) +1) // hamre pass zero na aye uske liye jo number janrate ho usme +1 ho jaye 

console.log(Math.floor(Math.random()*10) +1) // jo bhi number janrate ho isme hamne florr laga ke point ke bad ke number ko round figer bana diya hai

// formula 

const min=20;
const max=30

console.log(Math.floor(Math.random()*(max-min+1)+min)) // isme hmne difine kiya hai kaha se kha se bich main aaaye number 