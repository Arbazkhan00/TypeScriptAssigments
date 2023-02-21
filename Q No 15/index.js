var guests = ['Adil', 'Haris', 'Usama'];
console.log("".concat(guests[1], " can't make it to dinner."));
guests[1] = 'Arbaz Khan';
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", please come to dinner at my house on Saturday!"));
}
