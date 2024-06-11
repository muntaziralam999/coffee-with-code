function calculatecart(...num1){
    return num1
}
// console.log(calculatecart(200,400,500))


// functing in object 

const user={
    username:"bablu",
    price:199
}
function handleobj(anyobj){
    console.log(`username is ${anyobj.username} any price is ${anyobj.price}`)

}

handleobj(user)

// object ham yahi caal ke sath hi bana sakte hai 
handleobj({
    username:"sam",
    price:399
})

// array with function

const myArray=[200,400,100,600]

function returnScVal(getArray){
    return getArray[1]
}
console.log(returnScVal(myArray))
// aaray ko direct yaha bhi pass kr sakte hai
console.log(returnScVal([200.400,500,700]))