const user = {
  username: 'Alice',
  password: '1234',
};

user.lastLogin = 'Sep 27';

console.log(user);

const key = 'username';

const valOne = user[key];
const valTwo = user.key

console.log('valOne', valOne);
console.log('valTwo', valTwo);


// musicCollection['playlists']['playlistOne']['songs'].length
// musicCollection.playlists.playlistOne.songs.length