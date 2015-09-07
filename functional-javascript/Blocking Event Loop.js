
function repeat(operation, num) {
  // modify this so it can be interrupted
  if (num <= 0) return
      operation();
      setTimeout(function(){
          return repeat(operation, --num);
      },0)
}

module.exports = repeat

// Here's the official solution in case you want to compare notes:
// ────────────────────
// ────────────────────
//     function repeat(operation, num) {
//       if (num <= 0) return
//
//       operation()
//
//       // release control every 10 or so
//       // iterations.
//       // 10 is arbitrary.
//       if (num % 10 === 0) {
//         setTimeout(function() {
//           repeat(operation, --num)
//         })
//       } else {
//         repeat(operation, --num)
//       }
//     }
//
//     module.exports = repeat
//
// ────────────────────
// ────────────────────
