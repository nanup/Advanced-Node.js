const { launches } = require('../../models/launches.model');

let latestFlightNumber = 100;

const getLaunches = (req, res) => {
  return res.json(Array.from(launches.values()));
};

const addNewLaunch = (req, res) => {
  const launch = req.body;

  latestFlightNumber += 1;
  launches.set(
    launch.flightNumber,
    Object.assign(launch, {
      customers: ['Weyland-Yutani'],
      upcoming: true,
      flightNumber: latestFlightNumber,
      success: true,
    })
  );

  return res.status(201).json(launch);
};

const abortLaunch = (req, res) => {
  const launchId = req.params.id;

  const launchExists = launches.has(launchId);

  if (!launchExists) {
    return res.status(404).send();
  }

  launches.delete(launchId);
  return res.status(200).send();
};

module.exports = {
  getLaunches,
  addNewLaunch,
  abortLaunch,
};
