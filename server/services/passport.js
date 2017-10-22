const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
});

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
  proxy: true
},
  function(accessToken, refreshToken, profile, done) {
    User.findOne({ googleId: profile.id })
      .then((existingUser) => {
        if(existingUser) {
          done(null, existingUser)
        }
        else {
          new User({ 
            googleId: profile.id, 
            email: profile.emails[0].value
          })
            .save()
            .then(user => done(null, user));
        }
      })
  }
));