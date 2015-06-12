var fs = require('fs');
// console.log(process.argv[2]);
var data = fs.readFileSync(process.argv[2]);
// console.log(data);
var str = data.toString();
// console.log(str);
var array = str.split('\n');
console.log(array.length-1);
