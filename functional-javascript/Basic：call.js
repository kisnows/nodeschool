function duckCount() {
  // SOLUTION GOES HERE
  var args  = Array.prototype.slice.call(arguments);
  var count = 0;
   args.forEach(function(val,index){
     if(Object.prototype.hasOwnProperty.call(val,'quack')) count++;
   })
   return count;
}

module.exports = duckCount


// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────
// ─────────────────────────────────────

//     function duckCount() {
//       return Array.prototype.slice.call(arguments).filter(function(obj) {
//         return Object.prototype.hasOwnProperty.call(obj, 'quack')
//       }).length
//     }

//     module.exports = duckCount

// ─────────────────────────────────────
// ─────────────────────────────────────