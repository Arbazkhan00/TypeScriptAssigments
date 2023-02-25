var usernames4 = ['admin', 'Eric', 'Jessica', 'Michael', 'Sarah'];
if (usernames4.length === 0) {
    console.log('We need to find some users!');
}
else {
    for (var _i = 0, usernames4_1 = usernames4; _i < usernames4_1.length; _i++) {
        var username = usernames4_1[_i];
        if (username === 'admin') {
            console.log("Hello ".concat(username, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
