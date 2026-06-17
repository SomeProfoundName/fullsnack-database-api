const db = require('./connect')

db.query("SELECT * FROM snack;")
.then((data) => {
    db.end();
    console.log('SETUP COMPLETE');
    console.log(data);
})
.catch((error) => {
    console.log(error)
})