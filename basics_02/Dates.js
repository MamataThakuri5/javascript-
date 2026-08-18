//dates
let date=new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());

let todayDate=new Date(2026,2,2);
console.log(todayDate.toLocaleString());

let myTime=Date.now();
console.log(myTime);
//console.log(myCreatedDate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));
