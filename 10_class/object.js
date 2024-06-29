function mul(num){
    return num*5
}
mul.power=2;
console.log(mul(5));
console.log(mul.power)
console.log(mul.prototype)

function createUser(username,score){
    this.username=username
    this.score=score
}
createUser.prototype.increment=function(){
    this.score
}
createUser.prototype.printme=function(){
    console.log(`score is ${this.score}`)
}

const chai=new createUser("chai",25)
const tea=new createUser("tea",250)

chai.printme()