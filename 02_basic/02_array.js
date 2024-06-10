const mv=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

// mv.push(dc)   // array ke ander aaray ko add kar deta hai 
// console.log(mv);
// console.log(mv[3][1]) // array ke ander ke array ke data ko assec karne ke liye 


const allHeros=mv.concat(dc)   // ye dono array ko milke ek naya array janrate karta hai 
console.log(allHeros);

const allHerosn=[...mv,...dc]  // ye bhi ek trika dono aarya ko milne ka 
console.log(allHerosn)

const AnotherA=[1,2,3,[4,5,6],7,8,[10,11,12,[14,15]]]  
const realA=AnotherA.flat(Infinity);   // ye basic aray ander array fir se uke ander array in sbhi ko milakr ek arry main 
                                        // convert kar deta hai 

console.log(realA)

console.log(Array.isArray("bablu"))  // ye ham puch rhe ki jo apke ander hai wo array hai ya nhi hai 

console.log(Array.from("hitesh")) // ye array main convert karnr ke liye use hota iska use loop chalne ke liye aata
                                  // q qi lopp hamara arrya main sahi se chalta hai 


console.log(Array.from({name:"hitesh"})) // intersting hai ki q qi imse hamko bolna peega ki ham kisko array main convert karein 

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2.score3))