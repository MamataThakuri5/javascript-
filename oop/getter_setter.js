class User{
  constructor(email,password){
    this.email=email;
    this.password=password
  }
  get password(){
   // return this._password.toUpperCase()
   return `${this._password} mamata`
  }
  set password(value){
    this._password=value;
  }
  get email(){
    return this._email.toUpperCase()
  }
  set email(value){
    this._email=value;
  }
}
const hit=new User("mam@gmail.com","abc");
console.log(hit.password)
console.log(hit.email)