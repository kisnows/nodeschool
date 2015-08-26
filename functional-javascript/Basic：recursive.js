function reduce(array, fn, init) {
  var arrayCopy = array.slice()
  var i = 0;

  return (function recursiveReduce(arrayCopy, fn, init) {
    if (!arrayCopy.length) return init;
    return recursiveReduce(arrayCopy, fn, fn(init, arrayCopy.shift()), i++, array)
  } (arrayCopy, fn, init));
}

module.exports = reduce

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────
// ────────────────────────────────────────

    // function reduce(arr, fn, initial) {
    //   return (function reduceOne(index, value) {
    //     if (index > arr.length - 1) return value // end conditiond
    //     return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
    //   })(0, initial) // IIFE. kick off recursion with initial values
    // }

    // module.exports = reduce

// ────────────────────────────────────────
// ────────────────────────────────────────