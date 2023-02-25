function show_magicians56(magicians56) {
    for (var _i = 0, magicians56_1 = magicians56; _i < magicians56_1.length; _i++) {
        var magician = magicians56_1[_i];
        console.log(magician);
    }
}
function make_great14(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician14 = magicians_1[_i];
        great_magicians.push("the Great ".concat(magician14));
    }
    return great_magicians;
}
var magicians41 = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
show_magicians(magicians41);
var great_magicians51 = make_great(magicians);
show_magicians(great_magicians51);
