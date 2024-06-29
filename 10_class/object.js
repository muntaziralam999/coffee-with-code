function mul(num){
    return num*5
}
mul.power=2;
console.log(mul(5));
console.log(mul.power)
console.log(mul.prototype)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function createUser(username,score){
    this.username=username
    this.score=score
}

// create user ke ander ek naya function bana ke inject kr diya 
createUser.prototype.increment=function(){
    this.score
}

// create user ke ander  ek aur  naya function bana ke inject kr diya 



createUser.prototype.printme=function(){
    console.log(`score is ${this.score}`)
}




const chai=new createUser("chai",25)
const tea=new createUser("tea",250)

chai.printme()