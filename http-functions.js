// var https = require('https');
module.exports = function getHTML (options, callback) {
    /* Your code here */
  var https = require('https');
  var str = '';

  var requestOptions = {
    host: options.host,
    path: options.path
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
    response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
    var response = response.on('data', function (data) {
      str += data;
      printHTML(str);
      // console.log(str);
    });

    response.on('end', function() {
    printHTML(str);
  });
  });

  function printHTML (html) {
    callback(html);
  }
};

// getHTML(requestOptions);