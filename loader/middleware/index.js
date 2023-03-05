
/**
 * 
 * 경로 설정
 * @param {Express} app 익스프레스 
 */
module.exports = (app) => {

    app.use("/", (req, res) => {
        res.status(200).send('hello')
    })
}