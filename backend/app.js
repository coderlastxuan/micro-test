const express = require("express"); // 引入 Express 框架
const app = express(); // 创建一个 Express 应用实例
const port = 3000; // 定义服务监听的端口

// 定义 /api/xx 路径的 GET 请求
app.get("/api/a", (req, res) => {
  res.cookie("use", "session-id:1", {
    httpOnly: true, // 仅允许服务器端访问，增加安全性
    maxAge: 1000 * 60 * 100, // 设置 Cookie 10 分钟后过期（单位：毫秒）
  });
  res.send("Hello from /api/xx!"); // 返回一个字符串
});

app.get("/api/b", (req, res) => {
  res.cookie("use", "session-id:1", {
    httpOnly: true, // 仅允许服务器端访问，增加安全性
    maxAge: 1000 * 60 * 100, // 设置 Cookie 10 分钟后过期（单位：毫秒）
  });
  res.send("Hello from /api/xx!"); // 返回一个字符串
});

// 启动服务，监听端口
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
