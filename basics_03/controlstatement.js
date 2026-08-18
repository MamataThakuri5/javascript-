if(2=="2"){ //compares values after type conversion 
  console.log("executed");// true  (string converted to number)
}else{
  console.log("not executed");
}
if(2==="2"){// compares both valueStrict comparison (no type conversion)
  console.log("executed no");// false (number ≠ string)
}
//<,>,<=,>=,==,!=,===

// const score=200
// if(score>100){
//   const power="fly"
//   console.log(`user power:${power}`);
// }

// const balance=1000
// if(balance<500){
//   console.log("less than");
// }else if(balance<750){
//   console.log("less than 750")
// }else if(balance<900){
//   console.log("less than 900")
// }else{
//   console.log("greater than")
// }

// const userLoggedIn=true
// const debitcard=true
// if(userLoggedIn && debitcard){
//   console.log("allow to buy course");
// }

const userLoggedIn=true
const debitcard=false
if(userLoggedIn || debitcard){
  console.log("allow to buy course");
}

const month=3
switch(month){
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("febraury");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;
  case 5:
    console.log("may");
    break;
  case 6:
    console.log("june");
    break;
  case 7:
    console.log("july");
    break;
  case 8:
    console.log("august");
    break;
  case 9:
    console.log("september");
    break;
  case 10:
    console.log("october");
    break;
  case 11:
    console.log("november");
    break;
  case 12:
    console.log("december");
    break;
  default:
    console.log("invalid")
}
