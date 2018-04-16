const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});


passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  })
});


passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true // if our request runs through a proxy, it's fine (heroku porxy between browser and our server)
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id});

    if (existingUser) {
      return done(null, existingUser);
    }
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);

// we already have a record with thegiven profile id
// the second instance of user here represents the same instance, but by convention we make
// use of the one provided to us inside of the promise callback.

// in the async function above, by using return in the first bit of the if statement,
// if there is a user only that bit of code is run, negating the need of an 'else'.

// any time we reach out to our mongoose db, we are initiating an asyncronous action.
// the query returns a promise.
// 'exisiting user' he obviously is a model instance.
// 'done' is a function that tells passport that we're done.

// above, .save on the new user is persisting the new class instance to our database.

// GoogleStrategy says to passport: hey if anyone tries to authenticate with a string called google,
// (like below in the route handler, then use me). the scope specifies to google what access we want to have
// of the users account. You could also have like contacts, or see their images etc, basically just different
// permissions.
// if there's a uri error when going to /auth/google, it's because our callbackURL doesn't match the
// one in our credentials settings on our developer account, so we must specify that.
// we now need a new route handler to deal with the code that is sent back from google
