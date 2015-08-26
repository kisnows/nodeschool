function checkUsersValid(goodUsers) {
  "use strict";
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function (testUser) {
      return goodUsers.some(function (goodUser) {
        return testUser.id === goodUser.id;
      });
    });
  }
}

module.exports = checkUsersValid;