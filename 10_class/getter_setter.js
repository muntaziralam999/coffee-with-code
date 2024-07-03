class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value
    }

    get email(){
        return `${this._email}@gmail.com`
    }
    set email(value){
        this._email=value
    }
}
const hitesh=new User("hitesh","abc")
console.log(hitesh.password)
console.log(hitesh.email)