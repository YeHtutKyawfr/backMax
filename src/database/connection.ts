
const mysql = require('mysql');

/*
const connection = mysql.createConnection({
    host : 'yehtutkyaw-do-user-13207378-0.b.db.ondigitalocean.com',
    user :'doadmin',
    password : 'AVNS_FSm5oxHVW3slVBGRjjW',
    database :'yehtutkyaw'
})
*/

const connection = mysql.createConnection({
    host : 'localhost',
    port : '3307',
    user :'yehtutkyaw',
    password : 'yehtutkyaw',
    database :'yehtutkyaw'
})

connection.connect((err) => {
    if(err){
        throw Error;
    }
    console.log('mysql connected...')
})

export default connection;

module.exports = connection;