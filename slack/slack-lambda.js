const https = require('https');

exports.handler = (event, context, callback) => {
  const payload = JSON.stringify({
    text: `Message sent by ${event.name} (${event.email}):\n ${event.message}`,
  });

  const options = {
    hostname: 'hooks.slack.com',
    method: 'POST',
    path: '/services/TDMANCVNV/BDN556SG5/Uus71lTLXIpi9O4uWF3g6XWT',
  };

  const req = https.request(options, res =>
    res.on('data', () => callback(null, 'OK')),
  );
  req.on('error', error => callback(JSON.stringify(error)));
  req.write(payload);
  req.end();
};
