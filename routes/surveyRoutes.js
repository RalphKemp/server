const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const checkBalance = require('../middlewares/checkBalance');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post('/api/surveys', requireLogin, checkBalance, (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();
  });
};



// requireLogin here is a reference to a function, we're not calling it directly.
// We're saying hey, if there is a req and res, here's a request to the function that you'll run


