
const env = process.env;
/**
 * env : 현재 실행 모드
 * port : 서버 실행 포트 번호
 * 
 * cookie : 쿠키 관련 설정
 * session : 세션 관련 설정
 */
module.exports = { 
    env : "development", 

    port : env.PORT, 

    //쿠키 세션
    cs_secret : env.SERVER_SECRET,
    
    
    session : {
        secret : env.SERVER_SECRET,
        resave : false,
        saveUninitialized : false,
        name : '5esS1onName',
        cookie : { 
            secure : true, 
            httpOnly : true, 
            domain : 'http:://localhost:3000',
            expires : new Date(Date.now() + 60 * 60 * 1000)
        },
    }
}