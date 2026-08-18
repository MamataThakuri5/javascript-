class User{
  constructor(username){
    this.username=username
  }

  Logme(){
    console.log(`username:${this.username}`);
  }
  createId(){
    return `123`
  }
}
const name= new User("mamata")
//console.log(name.createId())
//console.log(name.logme())

class Teacher extends User{
  constructor(username,email){
    super(username)
    this.email=email
  }
}
const iphone=new Teacher('iphone',"iphone@gmail.com");
console.log(iphone)
console.log(iphone.createId());
//iphone.logme();


