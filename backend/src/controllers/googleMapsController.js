var axios = require('axios');


const distance = (og, dest) =>{
    var config = {
        method: 'get',
        url: 'https://maps.googleapis.com/maps/api/distancematrix/json',
        headers: { },
        params: {
            origins: og,
            destinations: dest,
            mode: 'walking',
            language: 'en-EN',
            key: 'AIzaSyAqjFMWvUEC6AfvWFu4OlVUD5SKvoByVqA'
        }
      };
    
    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data.rows[0].elements[0].distance.text));
    })
    .catch(function (error) {
        console.log(error);
    });
}


module.exports = {distance};