const http=require('http');
const server=http.createServer((req,res)=>{
    res.end('hey!')
})

server.listen(3000);
