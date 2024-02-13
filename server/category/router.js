const express = require('express');
const router = express.Router();
const {getAllCategory} = require('./controller');

const writeDataCategory = require('./seed')

router.get('/api/category', getAllCategory)

writeDataCategory

module.exports = router