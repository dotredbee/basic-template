const http = require('http')
const securityLoader = require('./security')
const middlewareLoader = require('./middleware')


/**
 * 
 * 서버 시작 전 셋팅
 * 
 * 포트 설정, 보안 설정, 미들웨어(라우트) 설정
 * 
 * @param {Express} app  
 */
module.exports = (app) => {
    const { port } = require('../config')
    app.set('port', port)

    securityLoader(app)

    middlewareLoader(app)

    return http.createServer(app)
}