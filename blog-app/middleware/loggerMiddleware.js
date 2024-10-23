// 모든 요청에 대해 요청 메서드, URL, 시간을 로그로 출력

module.exports = (req, res, next) => {
    const currentTime = new Date().toISOString();
    
    console.log(`[${currentTime}] ${req.method} ${req.url}`);

    next();
};