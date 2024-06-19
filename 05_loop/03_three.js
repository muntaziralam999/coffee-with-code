// for of loop

// const arr=[1,2,3,"mk","bn",{ck:"dk",mn:5}]

// for (const num of arr){
//     console.log(num)
    
// }


// string pe use 

// const gret="hello world"
// for (const val of gret) {
//     console.log(val)
// }


// map ye bhi ek parkar data types hi hai object ke trah key value isme hota hai 

const map= new Map()
map.set("IN","india")
map.set("USA","united state of america ")
map.set("fr","france")

// console.log(map)

// map ke ander ke key value ko alag alag print kar sakte hai 

for (const [key,value] of map) {
    console.log(key);
    
}