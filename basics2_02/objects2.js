// single object
/*const objex= new Object();
console.log(objex);*/
// multiple obj
const objex={
}
objex.id="123abc"
objex.name="mamata"
objex.isLoggedIn=false
console.log(objex);
console.log(Object.keys(objex));// it come as a array
console.log(Object.values(objex));
console.log(objex.hasOwnProperty("isLoggedIn"));

const regularUser={
  email:"mamata@gmail.com",
  fullname:{
   userName:{
    firstName:"mamata",
    lastname:"thakuri",
  }
}
}
//console.log(regularUser.fullname.userName);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

//const obj4=Object.assign({},obj1,obj2,obj3);
  //or
const obj4={...obj1, ...obj2, ...obj3}
//console.log(obj4);

const users=[
  {
    id:1,
    email:"radha@gmail.com"
  },
  {
    id:2,
    email:"krishna@gmail.com"
  },
  {
    id:3,
    email:"ram@gmail.com"
  },
  
]
//console.log(users);