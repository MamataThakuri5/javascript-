const promiseOne=new Promise(function(resolve,reject){
  // Do  an async task
  //DB calls ,cryptography,network
  setTimeout(function(){
    console.log('Async task is complete');
    resolve()
  },1000)
})
promiseOne.then(function(){
  console.log("promises consumed");
})
new Promise(function(resolve,reject){
  setTimeout(function(){
console.log("Aync task 2")
resolve()
  },1000)
}).then(function(){
  console.log("async 2 resolved");
})
const promiseThree=new Promise(function(resolve,reject){
  setTimeout(function(){
 resolve({username:"chai",email:"chai@example.com"})
  },1000)
  })
  promiseThree.then(function(user){
   console.log(user);
  })

  const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
      let error=true;
      if(!error){
        resolve({name:"mamata",password:"123"})
      }else{
        reject("error :something went wrong")
      }
    },1000)
  })
   promisefour.then((user)=>{
    console.log(user);
    return user.username
   }).then((username)=>{
    console.log(username);
   }).catch(function(error){
    console.log(error);
   })
