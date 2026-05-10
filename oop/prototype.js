

let myHeros=['thor','spiderma']
let heroPower={
  thor:"hammer",
  spiderman:"sling",
}
getSpiderPower=function(){
  console.log(`spidy power is ${this.spiderman}`);
}
  Object.prototype.hitesh=function(){
    console.log('hitesh is present in all object');
  }
  Array.prototype.heyHitesh=function(){
    console.log(`hitesh says hello`);
  }
  heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()

//inheritance
const user={
  name:"ram",
  age:20,
}

const Teacher={
  makeVideo:true
}
const TeachingSupport={
  isAvailable:false
}
const TASupport={
  makeAssignment:'js assignment',
  fullTime:true,
  __proto__:TeachingSupport
}
Teacher.__proto__=user

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)
let Uname="mamata    "
//let cast="thakuri    "
//console.log(name.trueLength());
String.prototype.trueLength=function(){
  console.log(`${this}`)
 // console.log(`${this.name}`)
  console.log(`true length is:${this.trim().length}`);
}
Uname.trueLength()
"hitesh".trueLength()
"mamataThakuri".trueLength()
