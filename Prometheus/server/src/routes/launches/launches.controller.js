const { launches } = require('../../models/launches.model');

const getLaunches = (req, res) => {
  return res.json(Array.from(launches.values()));
};

module.exports = {
  getLaunches,
};
