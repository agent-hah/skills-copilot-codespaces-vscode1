// Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create comments array
let comments = [];

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json(comments);
});

// DELETE /comments
app.delete('/comments', (req, res) => {
  comments = [];
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});