var express = require('express')l
var app = express();

app.get('/', function (req, res) {
     res.json({ message: 'hooray! welcome to our api!' });
});

app.listen(7001);
