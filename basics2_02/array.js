//arrays
const myArr=[1,2,3,4,5]
console.log(myArr);
console.log(myArr.length);
console.log(myArr[0])

const myArr2=new Array(6,7,8,9);
console.log(myArr2[0]);
//arrayMethods
myArr.pop();
myArr.push(6);

myArr.unshift(10);//it add value in first position
myArr.shift();//delete from first
console.log(myArr);
console.log(myArr.includes(12));//it give true or false is value is there it showing true otherwise false
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));//if is there it showing index num otherwise it showing -1
// slice,splice
console.log(myArr2.slice(1,3));

console.log(myArr2.splice(1,3));//splice take last index as well as it delete splice value 
console.log(myArr2);



