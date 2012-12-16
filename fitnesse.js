var path = require('path');
var express = require('express');
var _ = require('underscore');

var config = {};
var app = express();
_.defaults(config, { port: 80 } );
app.set('views', __dirname + '/views');
app.get('/', function(req, res){res.render('index.jade');});
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(config.port);
console.log('Listening on port', config.port);
