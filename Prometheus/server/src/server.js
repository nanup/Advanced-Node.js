const http = require('http');
const app = require('./app');
const { loadHabitablePlanets } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const startServer = async () => {
  await loadHabitablePlanets();

  server.listen(PORT, () => {
    console.log(`Listening on the port: ${PORT}`);
  });
};

startServer();
