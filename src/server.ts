
import express from 'express';
import dotenv from 'dotenv';

const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
});


require("./routes/routes.ts")(app);


app.listen(port, () => {
  console.log('Example app listening on port ${port}');
});



/*
app.get('/next',(req,res)=>{
  res.send('hello from Matrix backend')
})

app.get('/obj',(req,res)=>{
  res.send('hi');
})

*/
