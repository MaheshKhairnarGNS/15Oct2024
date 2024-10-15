//console.log("It's Working...");


//const something = require(someLibrary);

const express = require('express');
const  mwfun1 = require('./middleFuns/middlewarefun1');
const  mwfun2 = require('./middleFuns/middlewarefun2');

const appObj = express();

// const{mwfun1} = require('./middlewarefun1/')

require('dotenv').config();

appObj.use(express.json());

console.log(process.env.PORT)

// const object = everyFunction return something().

//appObj.get(routename, mdlfn1, mdlfn2,...., cbfn)

appObj.post('/exportModule', mwfun1, mwfun2, (req, res) => {
    let name = req.body.name;
    let surname = req.body.surname;

    let address = req.query.address;
    let profession = req.query.profession;

     res.json(
        {
            "msg":`Hi ${name} ${surname}, What are you doing?`,
            "Details":`Are you from ${address} and is your designation as a ${profession} in iDigi?`,
        });
     
    });


const PORT = process.env.PORT;
appObj.listen(PORT, function(){
    console.log(`The server is running on the PORT : ${PORT}`);
})