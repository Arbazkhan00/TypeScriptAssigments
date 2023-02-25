var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the function that accepts an array of magician names and prints them
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define the function that modifies an array of magician names by adding "the Great"
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("".concat(magician, " the Great"));
    }
    return great_magicians;
}
// Define an array of magician names
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
// Call the show_magicians() function to print the original array
console.log("Original magicians:");
show_magicians(magicians);
// Call the make_great() function with a copy of the original array
var great_magicians = make_great(__spreadArray([], magicians, true));
// Call the show_magicians() function again to print the new array with "the Great" added
console.log("\nGreat magicians:");
show_magicians(great_magicians);
