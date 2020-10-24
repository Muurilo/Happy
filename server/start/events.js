const Event = use('Event');
const Env = use('Env');
const Mail = use('Mail');

Event.on('forgot::password', async (data) => {
  await Mail.send('emails.recover', data, (message) => {
    message
      .to(data.user.email)
      .from(Env.get('SHIPPING_MAIL'))
      .subject('Recuperação de senha');
  }).catch((err) => {
    throw err;
  });
});

Event.on('password::recovered', async (data) => {
  await Mail.send('emails.changedPassword', data, (message) => {
    message
      .to(data.user.email)
      .from(Env.get('SHIPPING_MAIL'))
      .subject('Sua senha foi alterada');
  }).catch((err) => {
    throw err;
  });
});
