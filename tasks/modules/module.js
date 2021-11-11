import csvtojsonV2 from "csvtojson";
import fs from "fs";
import request from 'request';

/**
 * Write content line by line using sync method
 */
export function csvToTxtSync(csvFile, txtFile){
    csvtojsonV2().fromFile(csvFile).then((fileContent => {
        fs.truncateSync(txtFile, 0)
        fileContent.forEach((fileRow => {
            fs.appendFileSync(txtFile, JSON.stringify(fileRow) + '\n', (err) => {
                if (err){
                    console.error(err);
                }
            });
        }))
    }));
}

/**
 * Write content line by line using stream
 */
export function csvToTxtStream(csvFile, txtFile){
    const readStream = fs.createReadStream(csvFile);
    const writeStream = fs.createWriteStream(txtFile);
    readStream.pipe(csvtojsonV2()).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File overwriten!')
    })
}

export function webCsvToTxtStream(csvUrl,txtFile){
    const readStream = request.get(csvUrl);
    const writeStream = fs.createWriteStream(txtFile);
    readStream.pipe(csvtojsonV2()).pipe(writeStream);

}
