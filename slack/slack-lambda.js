const https = require('https');

exports.handler = (event, context, callback) => {
  const payload = JSON.stringify({
    text: `Claim made by ${event.name}\n Constact details: (${event.email})
    Claim details: ${event.claim}`,
  });

  const options = {
    hostname: 'hooks.slack.com',
    method: 'POST',
    path: `/services/${process.env.SLACK_API_TOKEN}`,
  };

  const req = https.request(options, res =>
    res.on('data', () => callback(null, 'OK')),
  );
  req.on('error', error => callback(JSON.stringify(error)));
  req.write(payload);
  req.end();
};
