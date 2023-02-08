const express = require('express');
const router = express.Router()
const { newData, newDataList, specficData } = require('../Controllers/dataControler');
router.route('/data/add').post(newData);
router.route('/data/get').get(newDataList);
router.route('/data/:id').get(specficData);
module.exports = router