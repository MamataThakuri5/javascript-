// stack(premitive satatypes) 
// heap(non-primitive data types)
let myname="mamata";
let myname2=myname;
 myname2="thakuri";
 console.log(myname);
console.log(myname2);
let  surname="thakuri";
console.log(surname);
let student={
  name:"radha:",
  age:20,

}
let student2=student;
student2.name="sita";
student.age=30;
console.log(student);
console.log(student2);


const name="Krishna";
const repo=4;
console.log(`hello my name is ${name} and i have ${repo} repo`);

const username= new String("mamata");
console.log(username[0]);
// built in functions
console.log(username.length);
console.log(username.toUpperCase());
console.log(username.charAt(3));
console.log(username.indexOf("a"));
console.log(username.substring(1, 4));
console.log(username.slice(-1,1));//we can use -ve also
const newstr="   RadhaKrishna  ";
console.log(newstr);
console.log(newstr.trim())
console.log()

console.log(newstr.replace('Krishna','Radha'));
console.log(newstr.includes('Radha'));
console.log(newstr.split('-'));
console.log(newstr.bold());


