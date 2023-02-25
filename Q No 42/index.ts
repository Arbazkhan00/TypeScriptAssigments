function show_magicians56(magicians56: string[]): void {
    for (const magician of magicians56) {
      console.log(magician);
    }
  }
  
  function make_great14(magicians: string[]): string[] {
    const great_magicians = [];
    for (const magician14 of magicians) {
      great_magicians.push(`the Great ${magician14}`);
    }
    return great_magicians;
  }
  
  const magicians41 = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
  show_magicians(magicians41);
  
  const great_magicians51 = make_great(magicians);
  show_magicians(great_magicians51);
  