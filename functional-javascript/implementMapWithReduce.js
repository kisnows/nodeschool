function arrayMap(arr, fn) {
  // SOLUTION GOES HERE
  //TODO fix this 
  var array = [];
  arr.reduce(function (pre, cur, index, arr) {
    return array.push(fn(cur));
  },{})
  return array;
}
module.exports = arrayMap;

// Here's the official solution in case you want to compare notes:

// ───────────────────────────────────
// ───────────────────────────────────

//     module.exports = function map(arr, fn, thisArg) {
//       return arr.reduce(function(acc, item, index, arr) {
//         acc.push(fn.call(thisArg, item, index, arr))
//         return acc
//       }, [])
//     }

// ───────────────────────────────────
// ───────────────────────────────────
