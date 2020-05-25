const express = require('express');
const { exec } = require("child_process");
const app = express();

app.get('/', function (request, response) {

    exec("sudo shutdown -h now", (error, stdout, stderr) => {
        if (error) {
            console.log("stderr: "+error.message);
            return;
        }
        if (stderr) {
            console.log("stderr: "+stderr);
            return;
        }
        console.log("stderr: "+stdout);
    });

    response.status(200).send();
});


app.listen(760, () => {
    console.log("Server listening at 760");
});