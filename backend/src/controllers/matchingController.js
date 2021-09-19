const userModel = require('../models/userModel.js');
const serviceModel = require('../models/serviceModel.js');
const { distance } = require('./googleMapsController');

const filterMatches = async (type, address) => {
    const services = await serviceModel.find({type: type});
    services = services.filter(async (item) => { // filter by distance
        const targetID = item.serviceProviderID;
        const targetUser = await userModel.findOne({_id: targetID});
        const distanceVal = distance(targetUser.address, address);
        item.maxDistance >= distanceVal
    });
    return services;
};

module.exports = {filterMatches}