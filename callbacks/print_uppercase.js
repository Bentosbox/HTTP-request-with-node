var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  /* Write your code here! */
  var toUpperCase = html.toUpperCase();
  console.log(toUpperCase);

}

getHTML(requestOptions, printUpperCase);