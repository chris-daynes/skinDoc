const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');

require('./routes/authRoutes')(app);
require('./services/passport');
const { mongoURL } = require('./config/keys');


const User = require('./models/user');


//connect to mongoose
mongoose.connect(mongoURL, { useMongoClient: true });
mongoose.Promise = global.Promise;


passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.use(passport.initialize());
app.use(passport.session());


  


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`)
});