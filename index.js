const express = require('express'); // common js module
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken) => {
    console.log(accessToken);
  })
);

// GoogleStrategy says to passport: hey if anyone tries to authenticate with a string called google,
// (like below in the route handler, then use me). the scope specifies to google what access we want to have
// of the users account. You could also have like contacts, or see their images etc, basically just different
// permissions.


app.get('/auth.google', passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);



const PORT = process.env.PORT || 5000;
// when heroku runs, it injects environment variables.
// Look at the underliying enviroment, and see if we've stated a port to use

app.listen(PORT); // express telling node which port to listen to.


