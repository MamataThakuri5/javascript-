const clock=document.getElementById("clock");
// const clock=document.querySelector('#clock');
(date.toLocaleTimeString());
setInterval(function(){
  let date=new Date();
//console.log(date.toLocaleDateString());
clock.innerHTML=date.toLocaleDateString();},1000)