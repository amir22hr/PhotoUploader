const mod = require('../helpers/mod');

//handle err 500
const handlerServerError = ((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).render('500', {
        title: "Server Error",
        proverb: mod.shortSentences()
    })
})

module.exports = {
    handlerServerError
}