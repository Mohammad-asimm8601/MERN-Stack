const http = require("http");
const fs = require('fs');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  console.log(req.url);
  if (req.url == "/") {
    res.statusCode = 200;
    res.end(
      "<h1>I am Mohammad Asim</h1> <p> Hey this is my first server! I am so very excited to create this server.</p> ",
    );
  } else if (req.url == "/hello") {
    res.statusCode = 200;
    const data  = fs.readFileSync('index.html');
    res.end(data.toString());
  } else {
    res.statusCode = 404;
    res.end("<h1>Page Not Found 404</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
