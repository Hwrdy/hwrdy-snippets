var obj = new Object();

(function(_obj){
  _obj.myfunc = function(){
    return "something";
  }
})(obj);

alert(obj.myfunc);



// to avoid setTimeout error
for(var i=0; i<10; i++){
  setTimeout((function(e){
    return function(){
      alert(e);
    }
  })(i), 1000);
}
