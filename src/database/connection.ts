
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'yehtutkyaw',
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