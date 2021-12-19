const mod = require('../helpers/mod');

const _404Controller = (req, res) => {

    res.render('404', {
        title: "404 - Page Not Found",
        data: mod.data,
        rou: mod.routes,
        proverb: mod.shortSentences()
    })

}

module.exports = _404Controller