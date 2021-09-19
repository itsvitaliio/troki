const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    // useless comment
    console.log('Successfully connected to the database');
    return 'OK';
})
.catch((err)=>{
    console.log(err);
    return 'FAIL';
});
