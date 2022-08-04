const fs = require('fs');

export const readFileContent = (file, callback) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          console.error('error', err);
          return;
        }
        callback(data);
    });
}
