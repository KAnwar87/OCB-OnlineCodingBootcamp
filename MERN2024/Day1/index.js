const t = require("./time.js");
const m = require("./math.js");

console.log("TIME MODULE");
console.log(t.time, "time");
console.log(t.hours, "hours");
console.log(t.minutes, "minutes");
console.log(t.seconds, "seconds");
console.log(t.day, "day");
console.log(t.month, "month");


const a = m.add (15,3);
const b = m.substract (15,3);
const c = m.multiply (15,3);

console.log("MATH MODULE");
console.log(a);
console.log(b);
console.log(c);


// - - - - - - - - - - - -
// node --watch index.js
// - - - - - - - - - - - -
