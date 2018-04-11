// keys.js - figure out what set of credentials to return

if (process.env.NODE_ENV === 'production') {
  // production
  module.exports = require('./prod');
} else {
  // development
  module.exports = require('./dev');
}





// google production keys

// client 898332218166-2c80p0h7e38mimt3nedllu0fcitbr7rt.apps.googleusercontent.com

// secret 5GmskQUF0upejZq8hUDWNOzN


// mongo: mongodb://ralphkemp:Downfalls2323@ds143774.mlab.com:43774/emaily-ralph-prod
