var events = require('events');

function Stream(){
  events.EventEmitter.call(this);
}

util.inherit(Stream, events.EventEmitter);

