console.log("::: Crypto.js :::");

// :: REQUIRE CORE MODULE 

// const crypto = require("crypto");
const crypto = require("node:crypto");


// :: Test crypto module 

// console.log(crypto);


// :: Test crypto random integer 6 digit

// const randomInt = crypto.randomInt(100000,999999);
const randomInt = crypto.randomInt(10);
console.log(randomInt);

// :: Test crypto random string

const randomString = crypto.randomBytes(10);
console.log(randomString);
console.log(randomString.toString("hex"));
console.log(randomString.toString("utf-8"));

const name = "Khairul";
const nameWithID = name + "-" + randomInt;
console.log(nameWithID);


// :: Test crypto UUID

const uuid = crypto.randomUUID();
console.log(uuid);


// Kindly explore encryption and decryption using crypto module
