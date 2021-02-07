require('./config');
const app = require('./main-service')
const mainServicePort = process.env.APP_PORT || 5000;

app.listen(mainServicePort, (err) => {
  if (err) { return; }
  const message = `Main Service running on port: ${mainServicePort}`;
  console.log(message);
});
