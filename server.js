const express = require("express");
const path = require("path");

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    let options = {
        root: '__dirname' + '/public/',
    }
    res.sendFile("");
});

app.listen(port, () => {
    console.log("app listening on port " + port);
});