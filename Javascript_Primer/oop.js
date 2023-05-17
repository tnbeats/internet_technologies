const fs = require('fs'); // If using Node.js

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
  } else {
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  }
});