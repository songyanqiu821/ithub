
// 使用路由的步骤
	// 1 安装express
	// 2 express.Router() 
	// 3 router.get()
	// 4 导出router
	// 5 在app.js导入 并且 挂载路由 app.use(router)


// route  设置路由规则
// router 路由对象

// router.js 职责 设置路由规则

// 加载express模块
const express  = require('express');
// 引入相关的文件
const indexCtrl = require('../controllers/index');
const userCtrl = require('../controllers/user');
const topicCtrl = require('../controllers/topic');
const categoryCtrl = require('../controllers/category');

// 创建路由对象
const router = express.Router();

// 导出路由模块
module.exports = router;

// 设置路由规则

// 首页 index.js 不需要登录展示的功能
router.get('/',indexCtrl.showIndex);

//  user.js 登录 注册 登出
router.get('/signin',userCtrl.showSignin)
    .post('/signin',userCtrl.handleSignin)
    .get('/signup',userCtrl.showSignup)
    .post('/signup',userCtrl.handleSignup)
    .get('/signout',userCtrl.handleSignout)

// 话题
router.get('/topic/create',topicCtrl.showTopic)
	.post('/topic/create',topicCtrl.handleTopic)
	.get('/topic/:topicID',topicCtrl.showEdit)
	.post('/topic/:topicID',topicCtrl.hanleEdit)
	.post('/topic/:topicID/delete',topicCtrl.hanleDel)

// 分类
