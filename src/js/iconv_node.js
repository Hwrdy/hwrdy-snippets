var iconv = require('iconv-lite');

// Buffer to string
var str = iconv.decode(buf, 'win1521');

// String to butter
var buf = iconv.encode("sample string", 'win1521');

// concat
var chunks = [];
var size = 0;
res.on('data', function(chunk){
  chunks.push(chunk);
  size+=chunk.length;
};
res.on('end',function({
  var buf = Buffer.concat(chunks, size);
  var str = iconv.decode(buf, 'utf8');
  console.log(str);
}));
