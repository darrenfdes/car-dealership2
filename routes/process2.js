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
    const name = req.body.name;
    const color = req.body.colour;
    const price = req.body.price;
    const year = req.body.year;

  console.log(name);
  con.query("insert into vehicle (vname , vcolor , vprice , vyear) values(?,?,?,?)",[name,color,price,year],function(err,result,field){
    if(err){
        console.log('Failed to insert new vehicle er:'+ err)
        return
    }
    console.log('Added new vehicle ' + name);
  	res.redirect('/pager2');
  }); 
});

module.exports = router;
