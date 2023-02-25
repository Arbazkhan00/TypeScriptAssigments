let current_users: string[] = ['john', 'sarah', 'mike', 'jessica', 'matt'];
let new_users: string[] = ['matt', 'JOHN', 'dave', 'susan', 'jessica'];

for (let new_user of new_users) {
  let is_taken: boolean = false;
  for (let current_user of current_users) {
    if (new_user.toLowerCase() === current_user.toLowerCase()) {
      is_taken = true;
      break;
    }
  }
  if (is_taken) {
    console.log(`Sorry, the username "${new_user}" is already taken. Please choose a different username.`);
  } else {
    console.log(`The username "${new_user}" is available.`);
  }
}
