var addEventListener = function(eleId, eventType, listener){
  try{
    var element = document.getElementById(eleId);
    if(element.addEventListener)
      element.addEventListener(eventType, listener, false);
    else if(element.attachEvent)
      element.attachEvent("on" + eventType, listener);
  }
  catch(e){}
};

var removeEventListener = function(eleId, eventType, listener){
  try{
    var element = document.getElementById(eleId);
    if(element.removeEventListener)
      element.removeEventListener(eventType, listener, false);
    else if(element.detachEvent)
      element.detachEvent("on" + eventType, listener);
  }
  catch(e){}
}
