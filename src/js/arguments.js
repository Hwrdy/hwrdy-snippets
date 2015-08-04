function func(arg1, arg2, arg3){
  if(arguments.length === 0){
    arg1 = arg2 = arg3 = "init";
  }
  else if(arguments.length === 1){
    arg2 = arg3 = "init";
  }
  else if(arguments.length === 2){
    arg3 = "init";
  }
}
