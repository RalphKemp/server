const express = require('express'); // common js module
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

// client id: client_id":"548233704598-smqt5rck2gc5o8du8fo9a5d08h4qitdd.apps.googleusercontent.com
// client secret: yZ4mBitdrCrzwD-CG9453nNE


const PORT = process.env.PORT || 5000;
// when heroku runs, it injects environment variables.
// Look at the underliying enviroment, and see if we've stated a port to use

app.listen(PORT); // express telling node which port to listen to.
