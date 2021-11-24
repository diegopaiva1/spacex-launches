const express = require('express');
const router = express.Router();
const LaunchesService = require("../services/LaunchesService");

router.get('/next', async function(req, res, next) {
  try {
    const response = await LaunchesService.next();
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get('/latest', async function(req, res, next) {
  try {
    const response = await LaunchesService.latest();
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get('/upcoming', async function(req, res, next) {
  try {
    const response = await LaunchesService.upcoming();
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get('/past', async function(req, res, next) {
  try {
    const response = await LaunchesService.past();
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json(e);
  }
});


module.exports = router;
