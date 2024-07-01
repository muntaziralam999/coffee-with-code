class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was aded by${this.username}`)
    }
}

const chai =new Teacher("chai","chai@teaher.com","1123")

chai.addCourse()

const msalachai=new user("masalchai")
msalachai.logMe()

console.log(chai instanceof Teacher)