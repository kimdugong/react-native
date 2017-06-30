const admin = require('firebase-admin');

module.exports = function(req, res) {
  if(!req.body.phone || !req.body.code) {
    return res.status(422).send({ error: 'Phone and code must be provided' });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '');
  const nationalCode = '+82';

  const userPhone = nationalCode + phone;

  const code = parseInt(req.body.code);


  admin.auth().getUser(userPhone)
    .then(() => {
      const ref = admin.database().ref('users/' + userPhone);
      ref.on('value', snapshot => {
        // stop listening
        ref.off();
        const user = snapshot.val();

        if(user.code !== code || !user.codeValid) {
          return res.status(422).send({ error : 'Code not valid'});
        }

        ref.update({ codeValid: false });
        admin.auth().createCustomToken(userPhone)
          .then(token => res.send({ token: token }))

      });
    })
    .catch((err) => res.status(422).send({ error: err}))
}