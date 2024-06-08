const score=400
const balcnce=new Number(100)
console.log(balcnce);
console.log(score);

console.log(balcnce.toString())
console.log(balcnce.toFixed(2))

const othNUmber=23.8966;
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

console.log(Math.random())
console.log(Math.random()*10)

console.log((Math.random()*10) +1)

console.log(Math.floor(Math.random()*10) +1)

// formula 

const min=20;
const max=30

console.log(Math.floor(Math.random()*(max-min+1)+min))