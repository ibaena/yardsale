var express = require('express'),
  app = express();

var PORT = process.env.PORT || 8000;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/yardsale');

var bodyParser = require('body-parser'),
  morgan = require('morgan');


//SERVE FILES FROM PUBLIC DIR
app.use('/public', express.static(__dirname + "/public"));

//MORGAN
app.use(morgan('dev'));

//BODYPARSER TO READ HTML
app.use(bodyParser.urlencoded({
  extended: false
}));

app.listen(PORT, function() {
  console.log('Up and running on: %s', PORT);
});


app.get('/', function(req, res) {
  res.send('Hi Ivan');
});
