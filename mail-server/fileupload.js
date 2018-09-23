var fs = require("fs");
var express = require("express");
var multer = require('multer');

var upload = multer({
    dest: './upload'
});



var app = express();

app.post('/upload', upload.single('imageFile'), function(req, res, next) {
    fs.rename(req.file.path, req.file.originalname, function(err) {
        if (err) {
            throw err;
        }
        console.log('Upload successfully!');
    })
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    res.end(JSON.stringify(req.file)+JSON.stringify(req.body));
})


app.listen(3000);
