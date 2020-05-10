const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const pdfRoute = require('./services/pdfMake');


const port = 3000;

const app = express();

//body parser middle ware
app.use(bodyParser.urlencoded({ extended: true }));

//Index Route
app.get('/', (req, res) => {
    console.log("here /")
    res.json({ success: true});
    // request
    //     .get('http://localhost:3000/pdfMake/pdf')
    //     .on('response', function (response) {
    //         console.log("response");
    //     })
});

app.use('/pdfMake', pdfRoute);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


