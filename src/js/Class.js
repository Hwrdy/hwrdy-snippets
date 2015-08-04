// Function Class

function Person(){
  this.nickName = "";
}

Person.prototype.showName = function(){
  return this.nickName;
}


// Object Class

function Person2(name, age){
  return{
    nickName: "",
    mage: age,
    showInfo: function(){
      return this.nickName;
    }
  };
}
