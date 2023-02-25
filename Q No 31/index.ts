let usernames4: string[] = ['admin', 'Eric', 'Jessica', 'Michael', 'Sarah'];

if (usernames4.length === 0) {
  console.log('We need to find some users!');
} else {
  for (let username of usernames4) {
    if (username === 'admin') {
      console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}
