
const env = process.env;
/**
 * env : 현재 실행 모드
 * port : 서버 실행 포트 번호
 * 
 * cs_secret : 쿠키, 세션 암호키
 * 
 * cookie : 쿠키 관련 설정
 * session : 세션 관련 설정
 */
module.exports = { 
    env : "production", 

    port : env.PORT, 

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