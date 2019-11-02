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

  var id=req.body.id;
  const queryString = "search from customer where cid = '?'";  
    
  console.log(id);
  con.query(queryString,[id],function(err,result,field){
    if(err){
      console.log('Failed to find customer error :'+ err)
      return
  }
  console.log('found customer with id ' + id);
  render.json(result)
//   res.render('foundcustomer',{result:result});  //foundcustomer ejs
  }); 
});

module.exports = router;