/* primitive
7 types: String ,number,boolean,null,undefined,symbol,bigint
*/
const outsideTemp=30;
const id=Symbol("id");
const Anotherid=Symbol("id");
console.log(id===Anotherid);
const bigNumber=1234567n;

/*
reference(non_primitive)
array,object,function
*/
const heros=["sam",'tom','jerry'];
const myObj={
  name:"sam",
  age:22,
  isFinite:true,
}
const  myFunc=function(){
console.log("mamata");
}
console.log(typeof bigNumber);
console.log(typeof null);