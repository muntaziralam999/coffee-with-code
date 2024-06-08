
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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack(primitive) ,Heap(non-primitive)

let mytoutube="bablu.com"

let anothername=mytoutube;

anothername="chai aur code"

console.log(mytoutube);
console.log(anothername);


let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="hites@google.com"

console.log(userOne.email)
console.log(userTwo.email)