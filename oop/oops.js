// object literal
const user={
  username:"mamata",
  loginCount:5,
  signedIn:true,
  getUserDetails:function(){
    console.log("got uSer  details from database");
    console.log(`username:${this.username}`);
    console.log(this);
  }
}
console.log(user);
console.log(user.getUserDetails());

// constructor function

function User(username,id,address ){
  this.username=username;
  this.id=id;
  this.address=address;
  this.greeting=function(){
    console.log(`welcome ${this.username}`);
  }
  return this;
}
const userOne= new User("mamata",101,"nepal");
const userTwo= new User("rita",102,"uk");
console.log(userOne);
console.log(userTwo);
