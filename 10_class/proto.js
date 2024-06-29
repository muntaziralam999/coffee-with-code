// let myName="hitesh   "

// console.log(myName.truelength)


let myheros=["thor","spiderman"]

let heropower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPOwer: function(){
        console.log(`spider power is${this.spiderman}`)
    }
}
 
// isme hamne heropower obejct ke ander inject karne bajaye hamne sidhe object adner hi inject kar diya ki jitne object bane ho sabke 
// ke nader inject ho wo kisi bhi name se object bane ho 

Object.prototype.hitesh=function(){
    console.log(`hitesh is present is all object`)
}

// same kam hamne araay ke sath kiya object jaisa 

Array.prototype.heyhitesh=function(){
    console.log(`hitesh says hello`)
}
heropower.hitesh()
myheros.hitesh()
myheros.heyhitesh()
// heropower.heyhitesh()

//++++++++++++++++++++++++++++++++++++++++++++++ prototype inhritnce in object ++++++==

const user={
    name:"chai",
    email:"chai@google.com"

}
const teacher={
    makeviedeo:true
}
const teachingsupport={
    isavilable:false
}
const tasupport={
    makeasignment:"js Assignment ",
    fulltime:true,
    __proto__:teachingsupport
}

teacher.__proto__=user

// modern syntax
Object.setPrototypeOf(teacher,user)

//++++++++++++++++++++++++++++++++++++++ ye hamne ek apna method banaya h

let user1="chai aur code    "

String.prototype.truelength=function(){
    console.log(`${this}`)
    
    console.log(`true lenght is ${this.trim().length}`);
}

user1.truelength()
"hitesh  ".truelength()
"chai  ".truelength()