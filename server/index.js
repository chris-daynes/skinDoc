const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');


//connect to mongoose
mongoose.connect(keys.mongoURL, { useMongoClient: true });
mongoose.Promise = global.Promise;

const app = express();


app.use(cookieSession({ 
  maxAge: 30 * 24 * 60 * 60 * 1000,
  name: 'session',
  keys: [keys.cookieKey]
 }));
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);



const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`)
});