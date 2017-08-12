var express = require('express');
var app = express();
var formidable = require('express-formidable');
var fs = require('fs');

//app.get("/", function(req,res) {
    //console.log(req);
    //res.send('Catch a page.\n');
    
//});

app.use(express.static("public"));
app.use(formidable());

app.post('/create-post', function (req,res) {
   console.log("Someone is posting.");
   fs.readFile(__dirname + "/data/posts.json", function (error, postlist) {
       var parsed = JSON.parse(postlist);
       var ima = Date.now();
       var posttxt = req.fields.blogpost;
       parsed[ima] = posttxt;
       fs.writeFile(__dirname + "/data/posts.json", JSON.stringify(parsed), function (error) {
           console.log('Wrote new post:\n' + posttxt);
       });
   });
});

app.listen(8080, function() {
	console.log('The server is listening on port 3000 and ready to accept requests.');
});






