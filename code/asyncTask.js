var fs = require("fs");
fs.readFile('demofile1.html', function (err, data) 
{
if (err) return console.error(err);
console.log(data.toString());
});
console.log("111Program Ended222");