const express = require('express');
const bcrypt = require('bcrypt')
const { registrationValidator, loginValidator } = require('../validators/authValidator');
const { checkPasswordEquality, createToken, createUser, getUser, verifyToken } = require('../controllers/authController');
const userModel = require('../models/userModel');
var router = express.Router()

/** @url for logging user in */
router.post('/login', async (req, res) => {
    try{
        res.setHeader("Access-Control-Allow-Origin", "*");
        // get the body of the request
        const username = req.body.username;
        const password = req.body.password;
        // try and find the user
        const user = await userModel.findOne({username: username});
        // process results
        if(user){
            // if user exists, check if the passwords match
            if(checkPasswordEquality(user, password)){
                // send the response back to the client
                res.status(200).send();
            }
        }
    }catch(err){
        console.log(err);
    }
});


/** @url for registering user */
router.post('/register', async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        // get the body of the request
        const username = req.body.username;
        const password = req.body.password;
        const type = req.body.type;
        const address = req.body. address
        const user = await userModel.findOne({username: username});
            if(!user){
                const newUser = {
                    username: username,
                    password: password,
                    type: type,
                    salt: await bcrypt.genSalt(),
                    address: address
                }
                const dbAddition = new userModel(newUser);
                await dbAddition.save();
                res.status(200).send('Successfully added user to the database');
            } 
        } 
        catch (err) {
            console.log(err);
        }
    }
);

module.exports = router