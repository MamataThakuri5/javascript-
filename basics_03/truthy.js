// truthy and falsy value

//truthy value
// "0",'false'," ",[],{},function(){} inside string all are truthy value
const user="mamata";
if(user){
  console.log("got user");
}else{
  console.log("do not have user")
}

// falsy values
// false,0,-0,BIGINT 0n,"",null,undefined,NaN

// if(user.length===0){
//   console.log("Array is empty");
// }
const emptyObj={}
if(Object.keys(emptyObj).length===0){
  console.log("object is empty");
}

// false==0;
// false==''  // these gives true
// 0==''

// NULLish coalesing operator(??):null undefined
let val1;
val1=5??10
val1=null??10
//val1=i=undefined??15
val1=null??10??20;
console.log(val1);

//ternary operator
// condition ? true:false
const iceprice=100;
iceprice>=80 ? console.log("yes"):console.log("no");
