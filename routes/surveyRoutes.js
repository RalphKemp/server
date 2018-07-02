const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const checkBalance = require('../middlewares/checkBalance');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('thanks for voting!');
  });

  app.get('/api/surveys', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id })
      .select({ recipients: false }); // leave recipients out of json data.
    res.send(surveys);
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    const p = new Path('/api/surveys/:surveyId/:choice');

    _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice};
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(({ surveyId, email, choice}) => {
        Survey.updateOne(
        {
          _id: surveyId,
          recipients: {
            $elemMatch: { email: email, responded: false }
          }
        },
        {
          $inc: { [choice]: 1 },
          $set: { 'recipients.$.responded': true },
          lastResponded: new Date()
        }
      ).exec();
    })
    .value();

      res.send({});
  });

  app.post('/api/surveys', requireLogin, checkBalance, async (req, res) => {
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
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.delete('/api/surveys/:surveyId', async (req, res) => {
    const { id } = req.body;
    const survey = await Survey.findOneAndRemove({ id });
    if (!survey) {
      res.status(404).send({error: "not found"});
    } else {
      res.send(204).send({alert: "survey deleted"});
    }
  });
}

// requireLogin here is a reference to a function, we're not calling it directly.
// We're saying hey, if there is a req and res, here's a request to the function that you'll run


// $inc is a mongo operator, that says find the either the yes or no property,
// and increment it by one.
// set - go into the subdocuments collection, find the appropriate reciepient who was just found
// in the elem match, look at their responded property and set it to true.

// ids in mongodb are _id












