const express = require('express');
const router = express.Router();

const controller = require('../controllers/analytic');

router.get('/overview', controller.overview);
router.get('/analit', controller.analytic);

module.exports = router;
