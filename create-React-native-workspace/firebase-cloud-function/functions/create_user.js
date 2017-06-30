const admin = require('firebase-admin');

module.exports = function(req, res) {

  // verify the user provided a phone
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input' });
  }

  // format the phone number to remove dashes and parens
  // regx: 숫자가 아니면 다 공백처리
  const phone = String(req.body.phone).replace(/[^\d]/g, "");
  const nationalCode = '+82';

  // create a new user account using that phone number
  admin.auth().createUser({ uid: nationalCode + phone })
    .then(user => res.send(user))
    .catch(err => res.status(422).send({ error: err }));

  // respond to the user request, saying the account was made

}

