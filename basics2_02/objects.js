//singleton object created
//object literals
const mySum= Symbol("key1")
const jsUser={
  name:"mamata",
  age:20,
  location:"rvs",
  isLoggedIn:true,
  lastLoginDays:["monday","saturay"],
  [mySum]:"mySumValue"
}
// console.log(jsUser.location)
// console.log(jsUser["location"])
// console.log(jsUser[mySum]);

jsUser.age=22;
//console.log(jsUser.age);
Object.freeze(jsUser);// after freeZing the object we canot change the values of the object properties
jsUser.age=23;
//console.log(jsUser);


jsUser.greeting=function(){
  console.log("hello JS user");
}

jsUser.greetingTwo=function(){
  console.log(`hello JS user, ${this.name}`);
}
jsUser.greeting();
jsUser.greetingTwo();