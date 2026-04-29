const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>I am Mohammad Asim</h1> <p> Hey this is my first server! I am so very excited to create this server.</p> ')
});

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});