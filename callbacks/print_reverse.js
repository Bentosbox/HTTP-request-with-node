var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printReverseCase (html) {

  /* Write your code here! */
  // var array = [];
  // array.push(html);
  var toReverseCase = html.split('').reverse().join('');
  console.log(toReverseCase);

}

getHTML(requestOptions, printReverseCase);