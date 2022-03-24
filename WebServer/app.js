const http = require('http');    // 该模块用于创建http请求
const fs = require('fs'); 
const port = 3000;

const server = http.createServer(function(req, res) { 
  res.writeHead(200, { 'Content-Type': 'text/html'})
  fs.readFile('index.html', function(error, data) {
    if (error) {
      res.writeHead(404);
      res.write('Error: File Not Found')
    } else {
      res.write(data);
    }
    res.end();  // 终止响应
  })
  // res.write('Hello Node');   
  // res.end();
})

server.listen(port, function(error) {
  // 下面的内容是打印在控制台上的
  if (error) {
    console.log('Something went wrong', error);
  } else {
    console.log('Server is listening on port' + port);
  }
});   


// ---------------------简单复盘--------------------
/**
 * NodeJS能够让JS代码运行在非浏览器的状态下。运行在比如：桌面app  服务器 或其他地方
 * 启动NodeJS指令： node + 文件名
 * 每次更新代码之后，需要手动重启NodeJS
 */