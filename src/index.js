// Bring in the module that we installed using npm
var express = require('express');

// Create a new express app, called app.
var app = express();

// Create our first route
app.get('/', function(req, res) {
  res.send('Hello world');
});

// Create our first route
app.get('/robot', function(req, res) {
  res.json({
    name: 'R2D2',
    lastUpdated: new Date()
  });
});

app.post('/robot', function (req, res) {
  res.send('Got a POST request to create a robot')
})

app.put('/robot', function (req, res) {
  res.send('Got a PUT request to modify a robot ')
})

app.delete('/robot/:robotId', function (req, res) {
  res.send('Got a DELETE request for robot ' + req.params.robotId);
})

app.delete('/robot/:robotId/part/:partId', function (req, res) {
  res.send('Got a DELETE request to delete the part (' + req.params.partId + ') on robot ' + req.params.robotId);
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})
