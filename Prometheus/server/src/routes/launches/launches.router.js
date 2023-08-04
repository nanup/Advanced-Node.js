const express = require('express');
const { getLaunches, addNewLaunch } = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', getLaunches);
launchesRouter.post('/', addNewLaunch);

module.exports = launchesRouter;
