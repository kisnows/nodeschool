  var slice = Array.prototype.slice

  function logger(namespace) {
    // SOLUTION GOES HERE
    return function(){
      var args = slice.call(arguments);
      var str = args.reduce(function(pre,cur){
        return pre+' '+cur;
      })
      console.log(namespace+' '+str);
    }
  }
  module.exports = logger
//   Here's the official solution in case you want to compare notes:

// ───────────────────────────────────────
// ───────────────────────────────────────

//     var slice = Array.prototype.slice

//     function logger(namespace) {
//       return function() {
//         console.log.apply(console, [namespace].concat(slice.call(arguments)))
//       }
//     }

//     module.exports = logger

// ───────────────────────────────────────
// ───────────────────────────────────────