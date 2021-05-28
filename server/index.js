const config = require('./env');
const createApp = require('./app');

(async () => {
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
  const app = createApp(config);
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
})();

process.on('SIGINT', () => {
  process.exit(0);
});
