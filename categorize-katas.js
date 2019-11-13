const request = require('request');
const path = require('path');
const fs = require('fs');
const $ = require('cheerio');
const getUrls = require('get-urls');
const { promisify } = require('util');

let basePath = './js';
let fileLinks = new Map();
let files = fs.readdirSync(basePath);

files.forEach(file => {
    if (path.extname(file) === '.js') {
        let foundUrl = false;
        let fileContents = fs.readFileSync(basePath + '/' + file, 'UTF-8');
        // find any url from the file and take the first one
        fileLinks.set(file, Array.from(getUrls(fileContents))[0]);
    }
});


const mkdir = promisify(fs.mkdir);
const rename = promisify(fs.rename);

fileLinks.forEach((url, fileName) => {
    callCodeWars(url, fileName, fileLinks);
});

async function callCodeWars(url, fileName, fileLinks) {
    const r = promisify(request);
    const response = await r(url);

    // Find the difficulty of the kata
    let rank = $('div.inner-small-hex span', response.body).html();
    rank = squash(rank);

    let oldPath = basePath + '/' + fileName;
    let newPath = basePath + '/' + rank + '/' + fileName;

    try {
        await mkdir(basePath + '/' + rank, {});
    } catch (err) {
        if (err.code !== 'EEXIST') {
            console.error(err);
        }
    }

    await rename(oldPath, newPath, () => null);
}

function squash(string) {
    return [...string].filter(c => c !== ' ').join('');
}