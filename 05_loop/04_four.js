// for in loop
const myObject={
    js:'javascript',
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
    console.log(key)
}

for (const key in myObject) {
    console.log(myObject[key])
}

// for in loop in array

const myarr=[1,2,3,4,"mk","ck"]

for(const i in myarr){
    console.log(i)
    console.log(myarr[i])
}