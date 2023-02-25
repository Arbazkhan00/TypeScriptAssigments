interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
      artist: artist,
      title: title
    };
  
    if (tracks) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  console.log(make_album("The Beatles", "Abbey Road"));
  console.log(make_album("Pink Floyd", "The Dark Side of the Moon", 10));
  console.log(make_album("Led Zeppelin", "IV", 8));
  