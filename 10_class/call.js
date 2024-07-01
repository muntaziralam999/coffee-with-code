function setUsername(username){
    this.username=username
}

function createuser(username,email,password){
    setUsername.call(this,username) // ye .call kam raha hai uper wale funtion ko memeory min hold karne ka 
                                    // aur ye wla this uper wale data ko yaha reference de raha hai tab jaake call hoga 
    this.email=email
    this.password=password
}

const chai =new createuser("chai","chai@fb.com","123")

console.log(chai)