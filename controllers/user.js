// 1、展示登录页面、
// 2、处理登录逻辑
// 3、处理注册逻辑
// 4、退出

exports.showSignin = (req,res) => {
    res.send('showSignin');
}

exports.handleSignin = (req,res) => {
    res.send('handleSignin');
}

exports.showSignup = (req,res) => {
    res.send('showSignup');
}

exports.handleSignup = (req,res) => {
    res.send('handleSignup');
}

exports.handleSignout = (req,res) => {
    res.send('handleSignout');
}
