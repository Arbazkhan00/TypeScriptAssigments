var guestList1 = ["Aid", "Usama", "Arbaz khan"];
console.log("Good news! We found a bigger dinner table!");
guestList1.unshift("Ramzan");
guestList1.splice(2, 0, "Mohsin");
guestList1.push("Frank");
guestList1.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", please join us for dinner!"));
});
