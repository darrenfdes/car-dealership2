var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"dms"
});

/* GET home page. */
router.post('/', function(req, res, next) {
  // var id=req.body.id;

  var address=req.body.address;

  var phone=req.body.phone;

  var name=req.body.name;
  console.log(name);
  con.query("insert into customer (caddress , cphone , cname) values(?,?,?)",[address,phone,name],function(err,result,field){
    if(err){
      console.log('Failed to insert new customer er:'+ err)
      return
  }
  console.log('Added new customer ' + name);
  	res.redirect('/pager2');
  }); 
});

module.exports = router;
