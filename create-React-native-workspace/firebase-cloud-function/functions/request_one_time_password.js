const admin = require('firebase-admin');
const twilio = require('./twilio');

module.exports = function(req, res) {
  if(!req.body.phone) {
    return res.status(422).send({ error: 'You must provide a phone number' });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '');
  const nationalCode = '+82';

  const userPhone = nationalCode + phone;

  admin.auth().getUser(userPhone)
    .then(userRecord => {
      const code = Math.floor((Math.random() * 8999 + 1000));

      twilio.messages.create({
        body: 'Your code is ' + code,
        to: userPhone,
        from: '+14848044413'
      }, (err) => {
        if (err) { return res.status(422).send(err); }

        admin.database().ref('users/' + userPhone)
          .update({ code: code, codeValid: true }, () => {
            res.send({ success: true });
          });

      })
    })
    .catch(err => {
      res.status(422).send({ error: err });
    })
}