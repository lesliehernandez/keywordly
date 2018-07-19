const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth/auth');
const projectRouter = require('./routes/project/project');
const app = express();
const port = process.env.PORT || 5000;


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/keywordlyDevDb')
const db = mongoose.connection

app.use((requestAnimationFrame, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
  next();
})

// Parser options
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

// Public folder
app.use(express.static(path.join(__dirname, 'client/public')))


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
}

// API calls
app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/project', projectRouter)


app.listen(port, () => console.log(`Listening on port ${port}`));