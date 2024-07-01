function setUsername(username){
    this.username=username
}

function createuser(username,email,password){
    setUsername.call(this,username)
    this.email=email
    this.password=password
}

const chai =new createuser("chai","chai@fb.com","123")

console.log(chai)