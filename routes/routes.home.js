const express = require('express');
const {homeRequest} = require('../controllers/controllers.homecontroller');
const router = express.Router();

router.get('/', homeRequest);

module.exports = router;
