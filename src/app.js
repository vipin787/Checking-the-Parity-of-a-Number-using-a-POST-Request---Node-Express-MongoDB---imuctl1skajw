const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    const chunks = [];

    req.on("data", (chunk) => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);

      const obj = JSON.parse(chunks);
      const value = obj.num1;
      if (!value || Number.isNaN(Number(value))) {
        res.statusCode = 400;
        res.end("Bad request");
        return;
      }
      if (value % 2 == 0) {
        res.statusCode = 200;
        res.end(`The number ${value} is even`);
      } else {
        res.statusCode = 404;
        res.end(`The number ${value} is odd`);
      }
    });
  }
});

module.exports = server;
/*
 
      // Write the code here to check if the number is odd or even
      if (Number(value) % 2 === 0) {
        console.log(Number(value));
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("The number is even");
      } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("The number is odd");
      }
   
*/
