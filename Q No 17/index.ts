let guests: string[] = ['Adil', 'Mohsin', 'Ramzan', 'Arbaz ', 'Usama'];

console.log("Sorry, but I can only invite two people for dinner.");

while (guests.length > 2) {
  const removedGuest = guests.pop();
  console.log(`Sorry, ${removedGuest}, I won't be able to invite you to dinner.`);
}

for (const guest of guests) {
  console.log(`You're still invited to dinner, ${guest}.`);
}

guests.splice(0, guests.length);
console.log(guests);
