// app.js是程序的入口
// 作用负责：1、配置 2、监听端口

const express = require('express');
// 引入router.js模块 实现两个文件的通信
const router = require('./routes/router');
// 创建一个express实例
const app = express();

// 监听端口
const PORT = 3000;
app.listen(PORT,()=>{
    console.log('使用端口号进行访问')
})

// 路由挂载【注册路由】
app.use(router);

// 设计路由另起文件




