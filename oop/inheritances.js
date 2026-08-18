class User{
  constructor(username){
    this.username=username
  }
  logMe(){
    console.log(`username is ${this.username}`);

  }
}

class Teacher extends User{
  constructor(username,email,password){
    super(username)
    this.email=email
    this.password=password
  }
  addcourse(){
    console.log(`A new course was added by ${this.username}`)
  }
}
const tea= new Teacher("tea","tea@gmail.com","123")
tea.addcourse();
tea.logMe()
const masalaTea=new User("masalaTea");
//masalaTea.LogMe()
console.log(User===Teacher)
console.log(masalaTea===tea)
console.log(User instanceof Teacher)
console.log(tea instanceof User)
