let guests = ['Adil', 'Haris', 'Usama'];

console.log(`${guests[1]} can't make it to dinner.`);

guests[1] = 'Arbaz Khan';

for (let guest of guests) {
  console.log(`Dear ${guest}, please come to dinner at my house on Saturday!`);
}
