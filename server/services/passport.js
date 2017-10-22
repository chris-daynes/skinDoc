const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('../config/keys');

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
},
  function(accessToken, refreshToken, profile, cb) {
    console.log('This is the access Token', accessToken);
    console.log('This is the user profile', profile);
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      const newUser = new User({ 
        googleId: profile.id, 
        email: profile.emails[0].value 
      })

      newUser.save(function (err, user) {
          console.log('this is the newUser', user)
          return cb(err, user);
        })
  }
));