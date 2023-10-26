const request = require("request");
const fs = require("fs");
const cmmndLine = process.argv.splice(2);

request(cmmndLine[0], (error, response, body) => {
  if (error) {
    console.error('error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Status:', response.statusCode);
  } 
    fs.writeFile(cmmndLine[1], body, (err) => {
        const size = Buffer.byteLength(body, 'utf8');
        console.log(`Downloaded and saved ${size} bytes to ${cmmndLine[1]}`);
      })
    });
