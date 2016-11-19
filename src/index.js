// Bring in the module that we installed using npm
var express = require('express');

// Create a new express app, called app.
var app = express();

// Create our first routem
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Create our first route
app.get('/robot', (req, res) => {
  res.json({
    name: 'R2D2',
    lastUpdated: new Date()
  });
});

app.post('/robot', (req, res) => {
  res.send('Got a POST request to create a robot')
})

app.put('/robot', (req, res) => {
  res.send('Got a PUT request to modify a robot ')
})

app.delete('/robot/:robotId', (req, res) => {
  res.send('Got a DELETE request for robot ' + req.params.robotId);
})

app.delete('/robot/:robotId/part/:partId', (req, res) => {
  res.send('Got a DELETE request to delete the part (' + req.params.partId + ') on robot ' + req.params.robotId);
})

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
})
