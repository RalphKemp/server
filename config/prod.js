// prod.js - production keys here

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_SECRET_ID,
  MONGODB_URI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
};

// these environment varibles are set on heroku
