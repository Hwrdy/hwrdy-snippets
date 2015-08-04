var isType = function(type) {
  return function(obj) {
    return toString.call(obj) == '[object ' + type + ']';
  }
}
