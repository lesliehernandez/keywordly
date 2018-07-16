const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
}

// API calls
app.use('/', indexRouter)

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/testdb')


app.listen(port, () => console.log(`Listening on port ${port}`));