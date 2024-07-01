//ES6

class user {
    constructor(username,email,password){
        this.username=username
        this.email-email
        this.password=password
    }

    encryptpassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai =new user("chai","chai@gmail.com","123")

console.log(chai.encryptpassword());
console.log(chai.changeUsername());



// brhind the seen
function user1(username,email,password){
    this.username=username
    this.email-email
    this.password=password
}
user1.prototype.encryptpassword=function(){
    return`${this.password}abc`
}
user1.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}

const tea =new user1("tea","chai@gmail.com","123")

console.log(tea.encryptpassword());
console.log(tea.changeUsername());