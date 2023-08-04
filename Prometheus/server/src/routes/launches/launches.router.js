const express = require('express');
const {
  getLaunches,
  addNewLaunch,
  abortLaunch,
} = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', getLaunches);
launchesRouter.post('/', addNewLaunch);
launchesRouter.delete('/:id', abortLaunch);

module.exports = launchesRouter;
