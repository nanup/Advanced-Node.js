const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: 'Prometheus',
  rocket: 'Explorer P2',
  launchDate: new Date(),
  destination: 'Kepler-296 e',
  customer: ['ZTM', 'Weyland-Yutani'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = { launches };
