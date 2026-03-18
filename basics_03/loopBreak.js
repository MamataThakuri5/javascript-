// for loop
for(let i=0;i<10;i++){
  const ele=i;
  //console.log(ele);

}
for(let i=0;i<=5;i++){
  const ele=i;
  if(ele==3){
   // console.log("3 is best number");
  }
 // console.log(ele);
}
for(let i=0;i<=5;i++){
  //console.log(`outer loop value :${i}`);
  for(let j=0;j<=5;j++){
    //console.log(`Inner loop value :${j} and inner loop: ${i}`);
    //console.log(i+'*'+j+'='+i*j); it print table
}
}
let arr=["flash","batman","superman"]
//console.log(arr.length);
for(let i=0;i<arr.length;i++){
  const ele=arr[i];
  //console.log(ele);
}

// break and continue
for(let i=1;i<=10;i++){
  
  if(i==5){
    console.log("5 detected");
    break;}
  console.log(`value of i is ${i}`);
}

// continue
for(let i=1;i<=10;i++){
  
  if(i==5){
    console.log("5 detected");
    continue;
  }
  console.log(`value of i is ${i}`);
}