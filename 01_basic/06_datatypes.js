
// symbol data type

const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id ===anotherid)

const obj={
    name:"bablu",
    class:2
}

const array=["mk","bk",123]

const myFunc=function(){
    console.log("dk")
}

console.log(typeof obj);
console.log(typeof array);
console.log(typeof myFunc);