const fs = require('fs');
let updateinfo = "how r u doing";

fs.writeFile('secret.txt', updateinfo, (err) => {
    if (err) throw err;
    console.log('updateinfo has been saved successfully');
});