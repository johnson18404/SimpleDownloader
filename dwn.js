const fs = require('fs');
const readline = require('readline');
const request = require('request');

const rl = readline.createInterface({
  input: fs.createReadStream('urls.txt')
});

rl.on('line', (url) => {
    if (url.length == 0) return;
    var filename = url.substr(url.lastIndexOf('/') + 1);
    console.log(`downloading: ${filename}`);
    request(url).pipe(fs.createWriteStream(filename))
});
