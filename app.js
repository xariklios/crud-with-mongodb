const express = require("express");
const router = require("./router");
const routerApi = require("./router-api");
const app = express();
const db = require('./database')

//middleware
app.use(express.json());
//db promise
db.connection();

app.use('/api', routerApi);
app.use('/', router);

module.exports = app;

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

