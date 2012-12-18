var path = require('path');
var express = require('express');
var _ = require('underscore');

var _config = {};
_.defaults(_config, { port: 80 } );

var app = express();
app.set('views', __dirname + '/views');
app.get('/', function(req, res){res.render('index.jade');});
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(_config.port);
console.log('Listening on port', _config.port);
