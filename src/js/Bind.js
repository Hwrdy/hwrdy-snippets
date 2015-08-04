function Bind(obj, method){
  return function(){
    return method.apply(obj, [].slice.call(arguments));
  };
}
