require('./example3');
console.log(require('./example3').message);         //hi
require('./example3').message='hello';
console.log(require('./example3').message);         //hello