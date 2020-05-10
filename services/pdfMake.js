const express = require('express');
const router = express.Router();

const pdfMake = require('../pdfMaker/pdfmake');
const vfsFonts = require('../pdfMaker/vfs_fonts');
// const timeout = 5 * 60 * 1000;  // for 5 min delay
const timeout = 10000;
const catalagueQuestion = require('./catlague_questions.json');

pdfMake.vfs = vfsFonts.pdfMake.vfs;

let j;

router.get('/pdf', (req, res) => {
    // console.log("here pdf", j)
    if(!!j){
        // console.log("here pdf cleaar timeout")
        clearTimeout(j);
    }
    const pdfDoc = pdfMake.createPdf(catalagueQuestion);
    pdfDoc.getBase64((data) => {
        res.writeHead(200,
            {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment;filename="filename.pdf"'
            });

        const download = Buffer.from(data.toString('utf-8'), 'base64');
        j = setTimeout(() => {
            res.end(download);
        }, timeout);
    });

});


module.exports = router;