const coding=["js","ruby","java","python","cpp"]

// coding.forEach(function(val){
//     console.log(val)
// })

// coding.forEach((val)=>{
//     console.log(val)
// })

// function printME(item){
//     console.log(item)
// }
// coding.forEach(printME)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)

// })

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