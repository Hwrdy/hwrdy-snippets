var EventProxy = require('eventproxy');
var proxy = new EventProxy();

proxy.all('event1', 'event2', 'event3', function(content, data){
  callback(null, [content, data]);
}

proxy.fail(errorCallback);
