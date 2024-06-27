// objct literal 

// const user={
//     username:"hitesh",
//     Lo:true,
//     getUserdeatails:function(){
//         // console.log("got user details from database")
//         // console.log(`username:${this.username}`)
//     }
// }

// console.log(user.username)
// console.log(user.getUserdeatails())

// agr ham golab main console yaha node main karte nahi empity aata hai lekin ham browser ke ander karte hai to bahut window aur sri 
// context aati hai 
// console.log(this)


// contructor function 

function user(username,logincount,isloggedin){
    this.username=username;
    this.logincount=logincount;
    this.isloggedin=isloggedin

    return this
}

const userOne=new user("hitesh",12,true)
const usertwo=new user("chai",11,false)

console.log(userOne.constructor)
console.log(usertwo)