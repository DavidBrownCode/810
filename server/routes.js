//Update from bottom of Express Routing Class Notes
router.post('/login', function(req, res, next){
    console.log(req.body);
    var email = req.body.email
    var password = req.body.password;
    var obj = {'email' : email, 'password' : password};
    res.status(201).json(obj);
    });