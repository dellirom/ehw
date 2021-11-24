const csvtojsonV2 = require("csvtojson");
const path = require('path');
const fs = require('fs');

const csvFilePath = path.join(__dirname, 'src', 'csv', 'nodejs-hw1-ex1.csv');
const txtFile = path.join(__dirname, 'src', 'task2.txt' );

/**
 * Write content line by line using sync method
 */
// csvtojsonV2().fromFile(csvFilePath).then((fileContent => {
//     fs.truncateSync(txtFile, 0)
//     fileContent.forEach((fileRow => {
//         fs.appendFileSync(txtFile, JSON.stringify(fileRow) + '\n', (err) => {
//             if (err){
//                 console.error(err);
//             }
//         });
//     }))
// }));

/**
 * Write content line by line using stream
 */
csvtojsonV2().fromFile(csvFilePath).then((fileContent => {
    const writeSteam = fs.createWriteStream(txtFile);

    writeSteam.on('finish', () => {
        console.log('File overwriten!')
    })

    fs.truncateSync(txtFile, 0)
    fileContent.forEach((fileRow => {
         writeSteam.write(JSON.stringify(fileRow ) + "\r\n")
    }))
    writeSteam.end();
}));



