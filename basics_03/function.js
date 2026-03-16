function name(){
  console.log("mamata");
  console.log("thakuri");
}
//name();
function addNum(num1,num2){
//console.log(num1+num2);
return num1+num2;
}
const result=addNum(2,3);
//console.log("result :",result);

function loginmessage(username="sam"){
  if(username===undefined){//(!username)
    console.log("please enter a username");
  }
  return `${username} just logged in`
}
//console.log(loginmessage("mamata"));
//console.log(loginmessage());

function claculateCartPrice(...num1){
  return num1
}
//console.log(claculateCartPrice(122,300,200));

function claculateCartPrice(val1,val2 ,...num1){
  return num1
}
console.log(claculateCartPrice(122,300,200,100));

const user={
  username:"mamata",
  age:20,
}
function handleObject(anyobj){
  console.log(`username is ${anyobj.username} and age is ${anyobj.age}`);

}
//handleObject(user);
//Or
handleObject({
  username:"sam",age:"23"
})

//array
const newArr=[200,100,300,400]
function returnSecondVal(getArray){
  return getArray[1]
}
//console.log(returnSecondVal(newArr))
console.log(returnSecondVal([2,3,4,5,6]));
