var fs = require("fs");

var data = fs.readFileSync("http.js");

console.log(data.toString());
console.log("end");