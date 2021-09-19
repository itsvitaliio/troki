const express = require('express');
const router = express.Router();
const currentJobModel = require('../models/currentJobModel');
const { finishJob } = require('../controllers/currentJobController');

router.post('/jobDone', async (req, res)=>{
    const jobID = req.body.jobID;
    const job = await currentJobModel.findOne({jobID: jobID});
    //checks if jobID is present in currentJob db
    if(job){
        //removes job from currentJob db
        finishJob(job);
        res.status(200).send();
    }else{
        res.status(404).send("Job does not exist");
    }
});

module.exports = router