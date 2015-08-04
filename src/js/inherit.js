// Basic

function Person(myName, myAge){
  this.age = age;
  this.name = myName;
}

Person.prototype.showName = function(){
  console.log(this.name);
}

function Child(){}

Child.prototype = new Person();


// super

function Child2(myName, myAge){
  this.$super = Person;
  this.$super(myName, myAge);
}


// detect

console.log(Child.prototype.constructor == Person);


// Define super

Object.prototype.$super = function(){
  var result;

  try{
    result = eval(this.constructor).prototype.constructor;
    result.apply(this, arguments);
  }
  catch(err){

  }

  return result;
}
