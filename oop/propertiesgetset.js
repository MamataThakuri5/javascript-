
// old version
function user(email,password){
  this._email=email;
  this.password=password;

  Object.defineProperty(this,'email',{
    get:function(){
      return this._email.toUpperCase()

    },
    set:function(value){
      this._email=value
    }
  })
  Object.defineProperty(this,'password',{
    get:function(){
      return this._password.toUpperCase()
    },
    set:function(value){
      this._password=value
    }
  })
}

const mam=new user("m@gamil.com","abc");
console.log(mam.email);
//console.log(mam.password);