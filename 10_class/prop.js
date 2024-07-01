class user {
    constructor(username){
        this.username=username
    }
    logME(){
        console.log(`username :${this.username}`)
    }
    
    static createId(){   // static keyword se aye aapna acces rok dta hai 
        return `123`
    }
}

const hitesh=new user("hitesh")
console.log(hitesh.createId())

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone =new Teacher("iphone","mail.com")
iphone.logME()