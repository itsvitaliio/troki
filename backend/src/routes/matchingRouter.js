const express = require('express');
const router = express.Router();
const {filterMatches} = require('../controllers/matchingController');
const userModel = require('../models/userModel');

/** @url to retrieve information from employer and sends to worker */
router.post('/searchForUsers' , async (req, res) => {
    const query = req.body;
    const user = await userModel.findOne({username: query.username});
    res.status(200).send(filterMatches(type, user.address));
});

module.exports = router;