var usernames6 = [];
if (usernames6.length === 0) {
    console.log('We need to find some users!');
}
else {
    for (var _i = 0, usernames6_1 = usernames6; _i < usernames6_1.length; _i++) {
        var username = usernames6_1[_i];
        if (username === 'admin') {
            console.log("Hello ".concat(username, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
