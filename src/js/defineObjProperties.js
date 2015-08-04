function Person(){}

Object.defineProperties(Person.prototype, "nickName", {
  value: "Tom",
  writable: true,
  enumerable: true,
  configurable: true
});

(function(){
  var getsetName = "Tom";
  Object.defineProperties(Person.prototype, "getsetName", {
    get: function(){return getsetName;},
    set: function(value){getsetName = value;}
  });
})();
