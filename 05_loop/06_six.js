// const coding=["js","ruby","java","python","cpp"]

// const value=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(value);

const myNums=[1,2,3,4,5,6,7,9,10]

// const numnums=myNums.filter((num)=> num>4)  //pranthices ke bina  direct karne se apne aap return ho jata hai  

// const numnums1=myNums.filter((num)=>{      // aur pranthuces ke sath kerne se hame value ko return karna parta hai hai 
//       return num>4
//     })
// console.log(numnums)


// for each main ham value ko ruturn kar sakte hai thora sa logic laga ke directly foreach data return nhi karta hai 

// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>5){
//         newNums.push(num)
//     }

// })

// console.log(newNums)


// filter practice 

const book=[
    {
        title:"book two",
        gen:"science",
        publication:1989
    },
    {
        title:"book One",
        gen:"Math",
        publication:1999
    },
    {
        title:"book three",
        gen:"science",
        publication:1990
    },
    {
        title:"book four",
        gen:"Hist",
        publication:1990
    },
    {
        title:"book five",
        gen:"science",
        publication:1990
    }
]

const userbook=book.filter((bk)=>{
    return bk.gen==="science" && bk.publication===1990
})
console.log(userbook)