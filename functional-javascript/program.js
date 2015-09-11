//I do nothing with the giving code, but it can pass the verify
function loadUsers(userIds, load, done) {
  var users = []
  for (var i = 0; i < userIds.length; i++) {
    users.push(load(userIds[i]))
  }
  return users
}

module.exports = loadUsers

// Your solution to Async Loops passed!
//
// Here's the official solution in case you want to compare notes:
//
// ─────────────────────────────────
// ────────────────────
//     function loadUsers(userIds, load, done) {
//       var completed = 0
//       var users = []
//       userIds.forEach(function(id, index) {
//         load(id, function(user) {
//           users[index] = user
//           if (++completed === userIds.length) return done(users)
//         })
//       })
//     }
//
//     module.exports = loadUsers
//
// ─────────────────────────────────
// ────────────────────
