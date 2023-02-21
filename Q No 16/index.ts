
let guestList1: string[] = ["Aid", "Usama", "Arbaz khan"];
console.log("Good news! We found a bigger dinner table!");
guestList1.unshift("Ramzan");
guestList1.splice(2, 0, "Mohsin");
guestList1.push("Frank");
guestList1.forEach((guest) => {
  console.log(`Dear ${guest}, please join us for dinner!`);
});
