const coding=["js","ruby","java","python","cpp"]

// coding.forEach(function(val){
//     console.log(val)
// })

// arrow function ka use krkr 

// coding.forEach((val)=>{
//     console.log(val)
// })


//+++++++++++++++++ kud se ek fuction bana ke uske ander use kiya foreach ke ander

// function printME(item){
//     console.log(item)
// }
// coding.forEach(printME)



// for each ke 3 pramter hota hai ek item dusra uska index no uske sath main pura array bhi print kar sakte ho 

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)

// })




// object main foreach ka use 

const mycoding=[
    {
        languageName:"javascript",
        languageFile:"js"
    },
    {
        languageName:"c++",
        languageFile:"cpp"
    },
    {
        languageName:"python",
        languageFile:"py"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageFile)
})
