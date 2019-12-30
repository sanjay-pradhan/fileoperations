const filestr = require('fs')

const path = 'secret.txt';
filestr.unlink(path, (err) => {
    if (err) {
        console.error(err)
    }
    console.log("file removed successfully")
});
