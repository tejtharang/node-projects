var express = require("express");
var app = express();

app.get("/:thing",function(req,res){
	var thing = req.params.thing;
	res.render("home.ejs",{thingVar : thing});

});



app.listen(3000,"localhost");