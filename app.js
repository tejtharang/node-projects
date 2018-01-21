var express = require("express");
var app = express();

// DOING THE ROUTES
// "/" -> "Hi There!"
// "/bye" -> "Goodbye!"

// The syntax for app.get(url, callback function)
// The callback function in turn has two arguments - req, res
// req - contains all info about req
// res - contains all info about res 
app.get("/",function(req,res){
	res.send("Hi there!");
});

app.listen(3000, function(){
	console.log("Example app listening on prot 3000!");
});