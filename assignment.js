const express = require('express');
const https = require('https');
const app = express();
const fs = require('fs');

//Get certificate and key
var options = {
    key: fs.readFileSync('key-20181205-161043.pem'),
    cert: fs.readFileSync('cert-20181205-161043.crt')
}

var billers = ['PAYEX','LZADA','MCECO'];

https.createServer(options, app).listen(443, function(req,res){
    console.log("Connected to HTTPS");
});

app.get('/getall', function(req, res) {
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(billers));
});