let usernames6: string[] = [];

if (usernames6.length === 0) {
  console.log('We need to find some users!');
} else {
  for (let username of usernames6) {
    if (username === 'admin') {
      console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}
