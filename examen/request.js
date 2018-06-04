var https = require('https');
 
module.exports = function request(options, callback) {

  var handler = function(response) {

    var str = '';

    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
      str += chunk;
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
      callback(JSON.parse(str));
    });
  }

  https.request(options, handler).end();
  
};