let mwfun2 = (req, res, middlewareFun2) => {
    console.log(req.query);

    req.query.address = req.query.address.toUpperCase();
    req.query.profession = req.query.profession.toUpperCase();

    middlewareFun2();
}


module.exports = mwfun2;
