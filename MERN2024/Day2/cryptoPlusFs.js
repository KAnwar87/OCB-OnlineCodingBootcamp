const crypto = require("node:crypto");
const fs = require("fs");


const randomInt = crypto.randomInt(0,999999);

fs.mkdir(`./fs-files/${randomInt}`, { recursive: true }, (err) => {
    if (err) {
        console.log('directory not created')
    } else {
        console.log('directory created')
    }
})

fs.writeFile(`./fs-files/${randomInt}/message-${randomInt}.txt`, `randomInt is ${randomInt}`, "utf-8", function (err) {
    if (err) {
        console.log('file not written')
    } else {
        console.log('file written')
    }
})

fs.readFile(`./fs-files/${randomInt}/message-${randomInt}.txt`, "utf8", function (err, data) {
    if (err) {
        console.log("file not read");
    } else {
        console.log("THIS IS THE DATA FROM THE FILE");
        console.log(data);
    }
});