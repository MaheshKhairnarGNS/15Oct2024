// In JS you can save function inside a variable.

let mwfun1 = (req, res, middlewareFun1) => {
    console.log(req.body);

    req.body.name = req.body.name.toUpperCase();
    req.body.surname = req.body.surname.toUpperCase();

    middlewareFun1();
}


module.exports = mwfun1;

// There are 2 types of export in nodejs

//1. Default export
//2. Named export
         
         //object.property
         //module.exports = {}
