const user={
  username:"mamata",
  price:500,
  welcomeMessage:function(){
    console.log(`${this.username},welcome to website`);
  }

}
// user.welcomeMessage();
// user.username="sam"
// user.welcomeMessage();

console.log(this);

// function chai(){
//   console.log(this);
// }
// chai();

// const chai=function(){
//   let username="hitesh"
//   console.log(this.username);//undefined output
// }

// const chai= ()=>{
//   let username="hitesh"
//   console.log(this.username)// undefined
// }
// chai()

const addtwo=(num1,num2) => {
  return num1+num2
}
console.log(addtwo(3,4))
//or
const sum=(num1,num2)=> num1+num2
console.log(sum(3,4))

const sumn=(num1,num2)=>( num1+num2)// no need to write return keyword
console.log(sumn(3,4))

const sumnum=(num1,num2)=>({username:"mamata"})// for object
console.log(sumnum())


// Immediately invoked fuction expression (IIFE)

;(function one(){
  console.log(`DB CONNECTED`);
}) ();

(function two(){
  console.log(`DB connected two`);
}) ();

((name)=>{
  console.log(`DB connected two ${name}`);
}) ('mamata');


