//const clock=document.getElementById('clock');
// // const clock=document.querySelector('#clock');
// //(date.toLocaleTimeString());
// setInterval(function(){
//   let date=new Date();
// //console.log(date.toLocaleDateString());
// clock.innerHTML=date.toLocaleTimeString();
// },1000);
const clock = document.getElementById('clock');

setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);