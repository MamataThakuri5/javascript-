console.log("Hello, World!");

var x=10;
a();
b();
console.log(x);
function a(){
  let x=30;
  console.log(x);
}
function b(){
  let x=300;
  console.log(x);
}

function m(){
  for(let i=1;i<=5;i++){
  setTimeout(function(){
    console.log(i);
  },i*1000)
}
}
//m();

//closure example
function outer(){
  var a=3;
  function inner(){
    console.log(a);
  }
  return inner;
}
outer()();//called inner function
//or
var ex=outer();
ex();

//function statement or function declaration both are same
 
a();
function a(){
  console.log(" a is called");
}
//we ca call a function even before creating function
//a();

// function Expression
var b=function(){
  console.log("b called");
}
//we have to called function after creating function
b();

//name function expresssion
var c=function xyz(){
  console.log("mamata");//we must call c() only not xyz()
}

c();


//Anonymous function -function without a name 
// function (){

// }

/*first class function-passing inside the another function and ability to be used like values it also called first class citizen*/
var g=function(para1){
  return function xyz(){

  }
}
console.log(b());

//arrow function
//callback function

//setTimeout and fetch() example
console.log("start");
setTimeout(function cbT(){
 // console.log("CB set Timeout");
},5000);

/*all the function which comes through promises or mutation observer will go inside microtask queue and priority first other will go call back queue als0 called task queue*/
fetch("http://api.netflix.com")
  .then(function cbF(){
 // console.log("CB netflix");
})

console.log("end")
//higher order function
let arrr=[1,2,3];
const ans=arrr.map(function triple(x){
  return x*3;
})
//console.log(ans);

//map(),filter(),reduce()
const arr=[2,3,4,5];
//double
function doubleValue(x){
  return x*2;
}
//binary
function binary(x){
  return x.toString(2);
}

const output=arr.map(doubleValue);
const op=arr.map(binary);
// console.log(output);
// console.log(op);

//filter
function isOdd(x){
  return x%2;
}
function isEven(x){
  return x%2===0;
}
/* or we can write 
const result=arr.filter((x)=>X%2);*/
const result=arr.filter(isOdd);
const res=arr.filter(isEven);
// console.log(result);
// console.log(res);

//Reduce
function findsum(arr){
  let sum=0
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum;
}
//console.log(findsum(arr));
const ou=arr.reduce(function(acc,curr){
  acc=acc+curr;
  return acc;

},0);
//console.log(ou);

//find max normal way
function findMax(arr){
  let max=0
  for(let i=0;i<arr.length;i++){
   if(arr[i]>max){
    max=arr[i];
   }
  }
  return max;
}
//console.log(findMax(arr))
//using reduce
const out =arr.reduce(function(max,curr){
  if(curr>max)
    max=curr;
  return max;
},0)
//console.log(out);

//Important of callbacks
/*->Issues with callbacks
a.callback hell like multiple function
b.Inversion of control
*/
//promises

const cart=["shoes","pants","kurtha"];

function createOrder(cart){
  const pr=new Promise(function(resolve,reject){
    //create order
    if(!validateCart(cart)){
      const err=new Error("cart is not valid");
      reject(err);
    }
    //logic for createOrder
    const orderId="12345";
    if(orderId){
      resolve(orderId);
    }
  })
  return pr;
}
function validateCart(cart){
  return cart.length>0;
}
//callback function 
/*createOrder(cart ,function(orderId){
  processTopayment(orderId,function(paymentInf){
    showOrderSummary(paymentInf,function(){
      updateBallence();
    });
  });
});*/
//using promises
createOrder(cart)
.then(function(orderId){
  //return processTopayment(orderId);
  /*OR then(orderId=>
  processTopayment(orderId))*/
 // console.log("Order Created:", orderId);
  return orderId;
})
.catch(function(err){
  //console.log(err.message);
})

// .then(function (paymentInf){
//   return showorderSummary(paymentInf);
// }).then(function(paymentInf){
//   return updateBalance(paymentInf);
// });

//async and  await used to handle the promises
// Await can only be used in an async function
const p=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    //console.log("promises resolved value");//js engine won't wait for promises to be resolve or none
  },5000)
})
function getData(){
  p.then((res)=>console.log(res));
  console.log("namaste js")
}
getData();

//fetch()=>Response.json()=jsonValue;

//promises Apis
const p1=new Promise((resolve,reject)=>{
  //setTimeout(()=>resolve("p1 success"),3000);
  setTimeout(()=>reject("p1 fails"),3000);
})
const p2=new Promise((resolve,reject)=>{
  //setTimeout(()=>resolve("p2 success"),5000);
  setTimeout(()=>reject("p2 fails"),1000);
})
const p3=new Promise((resolve,reject)=>{
  //setTimeout(()=>resolve("p3 success"),2000);
  setTimeout(()=>reject("p3 fail"),2000);
})

// Promise.all([p1,p2,p3]).then(res=>{
//   console.log(res);
// }).catch((err)=>
//   {console.error(err)
//   });

 /*Promise.allSettled([p1,p2,p3]).then(res=>{
  console.log(res);
}).catch((err)=>
  {console.error(err)
  });*/

/*Promise.race([p1,p2,p3]).then(res=>{
  console.log(res);
}).catch((err)=>
  {console.error(err)
  });*/
Promise.any([p1,p2,p3]).then(res=>{
  console.log(res);
}).catch((err)=>
  {console.error(err)
  });
  //this keyboard 
  //the value of depends on strict/non strict mode

  //this in strict mode-(this substitution)
 /* if value of this keyword is undeines and null this will be replaced with global object only in non strict node
*/