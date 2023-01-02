
import express from 'express';
import dotenv from 'dotenv';
import connection from './database/connection';


var cors = require('cors');
const express = require('express');
const app = express();
const port = 8080;
app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
});



/*
const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'yehtutkyaw-do-user-13207378-0.b.db.ondigitalocean.com',
    user :'doadmin',
    password : 'AVNS_FSm5oxHVW3slVBGRjjW',
    database :'yehtutkyaw'
})
*/


app.get('/first',(req,res) => {
  let sql = 'SELECT * FROM customer';
   connection.query(sql,(err,result)=>{
   if(err) throw err;
   console.log(result);
   res.send(result);
  })
 })

require("./routes/routes.ts")(app);


app.listen(port, () => {
  console.log('Matrix app listening on port ${port}');
});



