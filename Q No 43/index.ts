// Define the function that accepts an array of magician names and prints them
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  // Define the function that modifies an array of magician names by adding "the Great"
  function make_great(magicians: string[]): string[] {
    const great_magicians = [];
    for (const magician of magicians) {
      great_magicians.push(`${magician} the Great`);
    }
    return great_magicians;
  }
  
  // Define an array of magician names
  const magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
  
  // Call the show_magicians() function to print the original array
  console.log("Original magicians:");
  show_magicians(magicians);
  
  // Call the make_great() function with a copy of the original array
  const great_magicians = make_great([...magicians]);
  
  // Call the show_magicians() function again to print the new array with "the Great" added
  console.log("\nGreat magicians:");
  show_magicians(great_magicians);
  