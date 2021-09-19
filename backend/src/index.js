const express = require('express');
const cors = require('cors');
const app = express();

require('./db/db_config');
require('dotenv').config();


// options for cors middleware
const options = {
    origin: "*",
    credentials: false,
};
// add cors middleware to our app
app.use(cors(options));
app.use(express.json());

// Add headers
app.use(function (req, res, next) {

    console.log("Middleware is online");
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});


app.get("/", (req, res)=>{
    res.send("Hello world!");
});
app.use("/", require('./routes/authRouter.js'));
app.use("/", require('./routes/currentJobRouter.js'));
app.use("/", require('./routes/matchingRouter.js'));
app.use("/", require('./routes/offerRouter.js'));
app.use("/", require('./routes/userRouter.js'));
app.use("/", require('./routes/worker.serviceRouter.js'));

app.listen(process.env.PORT || 9000, ()=>{
    console.log('Running on port '+ process.env.PORT);
});

