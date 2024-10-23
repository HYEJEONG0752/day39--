// 인증된 사용자만 접근할 수 있는 라우트에 적용되는 미들웨어

module.exports = (req, res, next) => {
    if (req.session && req.session.user) {
        
        next();
    } else {
        res.redirect('/login');
    }
};