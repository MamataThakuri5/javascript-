let a=10;
//let c=300;
if(true){
  let a=3;
  const b=30;
  var c=2;
//console.log(a);
}
//console.log(c); //output 2 var is not good practice
//console.log(a);

function one(){
  const username="mamata";
  function two(){
    const websites="youtube"
    console.log(username);
  }
  //console.log(websites);error
  two();
}
//console.log(one());

// another example
if(true){
  const username="hitesh"
  if(username==="hitesh"){
    const websites="youtube"
    console.log(username+websites);
  }
  //console.log(websites) error
}
//console.log(username)error

//++++++++ interesting+++++++
function addone(num){
  return num+1
}
console.log(addone(5));

const addTwo=function(num){
return num+2
}
console.log(addTwo(5))
