const helmet = require('helmet')
const session = require('express-session')
const config = require('../../config')


/**
 * 
 * 보안 관련 설정
 * helmet, cors, session, cookie, header 설정
 * 
 * @param {Express} app 익스프레스
 */
module.exports = (app) => {
    console.log('setting security...')
    
    app.use(helmet())

    app.use(session(config.session))
    
    console.log('complated set secruity');
}