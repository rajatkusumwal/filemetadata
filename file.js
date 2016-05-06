var express=require("express");
var app=express();
var multer=require('multer');
var upload=multer({dest:'uploads/'});

app.use(express.static(__dirname+'/public'));


app.post('/api/fileanalyse', upload.single('avatar'), function (req, res,next) {
  console.log(req.file);
  var jobj={
      'size': req.file.size
  };
  res.send(JSON.stringify(jobj));
});


app.listen(8080);
