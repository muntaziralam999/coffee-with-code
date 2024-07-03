const descripter=Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter)

const chai={
    name:'ginger chai',
    price:250,
    isAvilable:true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,'name',{
    Writable:false,
    enumerable:false

})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))