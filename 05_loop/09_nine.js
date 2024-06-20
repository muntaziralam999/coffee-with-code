const arr1=[1,2,3,]

const newarr=arr1.reduce((acc,curval)=>{
    console.log(`acc= ${acc} and curval= ${curval}`)
    return acc+curval
},0)

console.log(newarr)


const cuourses=[
    {
        courseName:"js",
        price:99
    },
    {
        courseName:"py",
        price:199
    },
    {
        courseName:"c++",
        price:299
    },
]

const total=cuourses.reduce((acc,item)=>{
    return acc+item.price
},0)

console.log(total)