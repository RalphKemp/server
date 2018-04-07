const express = require('express'); // common js module
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());


const PORT = process.env.PORT || 5000;
// when heroku runs, it injects environment variables.
// Look at the underliying enviroment, and see if we've stated a port to use

app.listen(PORT); // express telling node which port to listen to.
