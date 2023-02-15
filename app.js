const express = require('express');
const bills = require('./routes/bills');
var bodyParser = require('body-parser');


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/bills',bills);
  
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);