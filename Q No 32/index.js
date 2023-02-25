var current_users = ['john', 'sarah', 'mike', 'jessica', 'matt'];
var new_users = ['matt', 'JOHN', 'dave', 'susan', 'jessica'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var is_taken = false;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_user = current_users_1[_a];
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            is_taken = true;
            break;
        }
    }
    if (is_taken) {
        console.log("Sorry, the username \"".concat(new_user, "\" is already taken. Please choose a different username."));
    }
    else {
        console.log("The username \"".concat(new_user, "\" is available."));
    }
}
