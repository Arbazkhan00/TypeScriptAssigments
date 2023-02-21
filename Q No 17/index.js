var guests = ['Adil', 'Mohsin', 'Ramzan', 'Arbaz ', 'Usama'];
console.log("Sorry, but I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I won't be able to invite you to dinner."));
}
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("You're still invited to dinner, ".concat(guest, "."));
}
guests.splice(0, guests.length);
console.log(guests);
