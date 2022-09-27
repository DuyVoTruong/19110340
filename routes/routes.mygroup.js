const express = require('express');
const {mygroupRequest} = require('../controllers/controllers.mygroupcontroller');
const router = express.Router();

router.get('/:mygroupID', mygroupRequest);
router.get('/', mygroupRequest);
router.post('/',mygroupRequest);

module.exports = router;