function arrayMap(arr, fn) {
  // SOLUTION GOES HERE
  //TODO fix this 
  var array = [];
  arr.reduce(function (pre, cur, index, arr) {
    return array.push(fn(pre));
  })
  return array;
}
module.exports = arrayMap;
