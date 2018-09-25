import Sqlite from 'nativescript-sqlite';
const db_promise = new Sqlite('demodb');

export default db_promise.then(
  db => {
    // This should ALWAYS be true, db object is open in the "then"
    console.log('Is open database? ', db.isOpen() ? 'Yes' : 'No'); // Yes
    console.log('Is a Sqlite Database:', Sqlite.isSqlite(db) ? 'Yes' : 'No'); // Should print "Yes"
    db.execSQL('create table Hello (word,dos)', (err, res) => {
      console.log('se creo tabla:', res);
      console.log('se creo tabla:', err);
    });
    //db.close();
  },
  err => {
    console.error('We failed to open database', err);
  }
);
