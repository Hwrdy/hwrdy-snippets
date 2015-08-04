function Clone(oldObj){
  var pr = Object.getPrototypeOf(oldObj);
  var newObj = Object.create(pr);
  var names = Object.getOwnPropertyNames(oldObj);
  names.forEach(
    function(prop){
      var desc = Object.getOwnPropertyDescriptor(oldObj, prop);
      Object.defineProperty(newObj, prop, desc);
    }
  );

  if(!Object.isExtensible(oldObj)){
    Object.preventExtensions(newObj);
  }

  return newObj;
}
