const express = require('express');
const {messageRequest} = require('../controllers/controllers.messagecontroller');
const router = express.Router();

router.get('/',messageRequest);
router.get('/:messageID',messageRequest);

module.exports = router;