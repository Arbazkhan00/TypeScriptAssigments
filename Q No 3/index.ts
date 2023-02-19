let name1="Arbaz khan";
console.log("Upper Case: " + name1.toUpperCase());
console.log("Lower Case: " + name1.toLowerCase());
console.log("Title Case: " + name1.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));