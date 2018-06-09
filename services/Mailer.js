// Mailer.js starts with a capital letter becuase we're exporting a class

const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends help.Mail {

}


// we are extending the mail class from the sendgrid library.
// now are class mailer contains a bunch of setup which is inherited from our help.mail.
