function Person(){
  this.age = 23;
  this.name = "123";
}

Person.showInfo = function(){
  if(this instanceof Person)
    // do something

  return this.sex;
}

Person.sex = "male";


Person.prototype.showInfo = function(){
  //add static to prototype
  return Person.showInfo.call(this);
}


