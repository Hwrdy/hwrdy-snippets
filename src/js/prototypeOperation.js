// cross-browser getprototypeof

if(typeof(Object.getPrototypeOf) !== "function"){
  if("test"._proto_ === "object"){
    Object.getPrototypeOf = function(obj){
      return obj._proto_;
    }
  }
  else{
    Object.getPrototypeOf = function(obj){
      return obj.constructor.prototype;
    }
  }
}


// check prototype chain

Object.prototype.isPrototypeOf();



// check properties

var o = {};
o.prop = "123";
o.hasOwnProperty("prop"); // true



// check for...in support
Object.propertyIsEnumerable();

