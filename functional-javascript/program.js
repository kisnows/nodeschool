function checkUsersValid(goodUsers) {
    "use strict";
    function getId(obj) {
        return obj.id;
    }

    var good = goodUsers.map(function (value) {
        return getId(value);
    });
    return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
        var submitted = submittedUsers.map(function (value) {
            return getId(value);
        });
        return submitted.every(function (value, index, good) {
            var is = true;

            submitted.forEach(function (v) {
                if (v === value) {
                    is = false;
                }
            });
            return is;
        });
    };
}

module.exports = checkUsersValid;