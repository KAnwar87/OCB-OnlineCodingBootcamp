const fs = require("fs");

// fs.writeFile("./fs-files/message.txt", "Hello Node.js", "utf-8", function (err) {
//     if (err) {
//         console.log('file not written')
//     } else {
//         console.log('file written')
//     }
// })


// for (let i = 0; i < 10; i++) {
//     fs.writeFile(`./fs-files/message${i}.txt`, `Hello Node.js ${i}`, "utf-8", function (err) {
//         if (err) {
//             console.log('file not written')
//         } else {
//             console.log('file written')
//         }
//     })
// }

fs.readFile("./fs-files/message5.txt", "utf8", function (err, data) {
    if (err) {
        console.log("file not read");
    } else {
        console.log("THIS IS THE DATA FROM THE FILE");
        console.log(data);
    }
});

