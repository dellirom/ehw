import * as path from 'path';
import {csvToTxtStream, csvToTxtSync, webCsvToTxtStream} from './modules/module.js'

const __dirname = path.resolve();
const csvFile = path.join(__dirname, 'tasks', 'src', 'csv', 'nodejs-hw1-ex1.csv');
const txtFile = path.join(__dirname, 'tasks', 'src', 'task2.txt' );
const csvUrl = 'https://epam.sharepoint.com/sites/EPAMNode.jsGlobalMentoringProgram/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FEPAMNode%2EjsGlobalMentoringProgram%2FShared%20Documents%2FGeneral%2FAssets%2Fnodejs%2Dhw1%2Dex2%2Etxt&parent=%2Fsites%2FEPAMNode%2EjsGlobalMentoringProgram%2FShared%20Documents%2FGeneral%2FAssets&p=true';


// csvToTxtSync(csvFile,txtFile);

// csvToTxtStream(csvFile,txtFile);

webCsvToTxtStream(csvUrl,txtFile);
