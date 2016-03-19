var express = require('express'),
  app = express();

var PORT = process.env.PORT || 8000;


var bodyParser = require('body-parser'),
  morgan = require('morgan'),
  db = require('./config/connection.js'),
  User = require('./models/user');


//SERVE FILES FROM DIRS
app.use('/public', express.static(__dirname + "/public"));
app.use('/controllers', express.static(__dirname + "/controllers"));
app.use(express.static(__dirname + "/views"));
app.use("/views", express.static(__dirname + "/views"));

//MORGAN
app.use(morgan('dev'));

//BODYPARSER TO READ HTML
app.use(bodyParser.urlencoded({
  extended: false
}));

app.listen(PORT, function() {
  console.log('Up and running on: %s', PORT);
});



// get all todos
app.get('/list', function(req, res) {
  console.log(req);
  // use mongoose to get all todos in the database
  User.find(function(err, users) {
    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
      res.send(err);

    res.json(users); // return all todos in JSON format
    console.log(users);
  });
});

// create todo and send back all todos after creation
app.post('/api/todos', function(req, res) {

  // create a todo, information comes from AJAX request from Angular
  Todo.create({
    text: req.body.text,
    done: false
  }, function(err, todo) {
    if (err)
      res.send(err);

    // get and return all the todos after you create another
    Todo.find(function(err, todos) {
      if (err)
        res.send(err);
      res.json(todos);
    });
  });

});

// delete a todo
app.delete('/api/todos/:todo_id', function(req, res) {
  Todo.remove({
    _id: req.params.todo_id
  }, function(err, todo) {
    if (err)
      res.send(err);

    // get and return all the todos after you create another
    Todo.find(function(err, todos) {
      if (err)
        res.send(err);
      res.json(todos);
    });
  });
});
