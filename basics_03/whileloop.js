// let i=0;
// while(i<=10){
//   console.log(`value of i is :${i}`);
//   i=i+2;
// }

// let arr=["mamata","thakuri","malla"]
// let i=0;
// while(i<arr.length){
//   console.log(`value is ${arr[i]}`);
// i++;
// }

// do while loop

let score=11;
do{
  console.log(`score is ${score}`);
  score++;
}while(score<=10);


//for of loop  for array
//["","",""]
//[{},{},{}]

// const arr=[1,2,3,4,5];
// for(const num of arr){
//   console.log(num);
// }

// const arr=['mamata','malla','thakuri'];
// for(const num of arr){
//   console.log(num);
// }

// map
const map=new Map();
map.set('in',"india")
map.set('np','nepal')
map.set('fr','france');
map.set('in',"india")
//console.log(map);
for(const [key] of map){
 // console.log(key);
}
for(const [key,value] of map){
  //console.log(key,':-',value);
}

const obj={
  cpp:'c++',
  js:'javascript',
  py:'python',
}
for(const key in obj){
 // console.log(key);
 console.log(`${key} shortcut is for ${obj[key]}`);
}

//foreach loop
const coding=['js','py','java','cpp']
coding.forEach(function(item){
 //console.log(item);
})
//or
coding.forEach((val)=>{
 // console.log(val);
})

// function printme(item){
//   console.log(item);
// }
// coding.forEach(printme());

const mycoding=[
  {
    langName:"js",
    price:2000,
  },
  {
    langName:"java",
    price:2100,
  },
  {
    langName:"python",
    price:2200,
  },
]

mycoding.forEach( (item)=>{
  console.log(item.langName);
})

const nums=[1,2,3,4,5,6,7,8]
// const newNums=nums.filter((num)=>(num>4)//{return num>4}
// )
// console.log(newNums)
//or
const mynums=[]
nums.forEach((num)=>{
  if(num>4){
    mynums.push(num)
  }
})
//console.log(mynums);

const books=[
  {
    title:"book1",genre:"history",publish:'2045'
  },
  {
    title:"book2",genre:"science",publish:"1914"
  },
  {
    title:"book3",genre:"fiction",publish:"2013"
  },
  {
    title:"book4",genre:"english",publish:"2019"
  },
]

let userbook=books.filter((bk)=>(bk.genre==='english'))
userbook=books.filter((bk)=>
  {
    return bk.publish >=2000 && bk.genre==='history'
  });

//console.log(userbook);
 
const myNums=[1,2,3,4,5,6,7,8]

//const newnum=myNums.map((num)=>(num+10));
const newnum=myNums
              .map((num)=>(num*10))
              .map((num)=>(num+1))
              .filter((num)=>num>=30)

//console.log(newnum);

let arr=[1,2,3]
let total=arr.reduce(function(acc ,currval){
  console.log(`acc:${acc} and currval:${currval}`);
  return acc+currval

},2)
//console.log(total);
total=arr.reduce((acc,currval)=> acc+currval,0)
//console.log(total);


const shoppinngCart=[
  {
    itemName:"js course",
    price:2999,
  },
  {
    itemName:"py course",
    price:1999,
  },
  {
    itemName:"java course",
    price:3999,
  },
]
 const pricepay=shoppinngCart.reduce((accu,item)=>accu+item.price,0)
 console.log(pricepay);




