function overload(){}

overload.prototype.method = function() {
  var len = arguments.length;

  if(len == 2){
    if(typeof(typeof(arguments[0]) == "number" && typeof(arguments[1]) == "number")){
      // case 1
    }
    else if(typeof(typeof(arguments[0]) == "string" && typeof(arguments[1]) == "string")){
      // case 2
    }
    else
      throw new Error("error");
  }
  else if(len == 3){
    if(typeof(typeof(arguments[0]) == "string" && typeof(arguments[1]) == "string" && typeof(arguments[2]) == "string")){
      // case 3
    }
    else
      throw new Error("error");
  }
  else
    throw new Error("error");
}
