var express = require('express');
var client = require('../connection.js');  
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/search',function(req,res,next){
	 res.render('index', { title: 'Search Data' ,type:'search' });
});
router.post('/search',function(req,res,next){
	 res.render('index', { title: 'Search Data',type:'search' });
});
router.get('/addIndices',function(req,res,next){
	 res.render('index', { title: 'Add Indices' ,type:'addIndices'});
});
router.post('/addIndices',function(req,res,next){

	client.indices.create({  
				  index: 'gov'
				},function(err,resp,status) {
				  if(err) {
				    console.log(err);
				  }
				  else {
				    console.log("create",resp);
		  }
		});
	 res.render('index', { title: 'Add Indices',type:"addIndices" });
});
router.get('/addDocument',function(req,res,next){
	 res.render('index', { title: 'Add Document' ,type:"addDocument"});
});
router.post('/addDocument',function(req,res,next){
	 res.render('index', { title: 'Add Document',type:"addDocument" });
});
router.get('/deleteDocument',function(req,res,next){
	 res.render('index', { title: 'Delete Document',type:"deleteDocument" });
});
router.post('/deleteDocument',function(req,res,next){
	 res.render('index', { title: 'Delete Document',type:"deleteDocument" });
});
module.exports = router;
