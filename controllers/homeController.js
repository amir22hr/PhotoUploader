const mod = require('../helpers/mod');

const homeController = (req, res) => {
    // throw new Error()

    res.render('home', {
        title: "Photo Uploader",
        data: mod.data,
        rou: mod.routes,
        proverb: mod.shortSentences()
    })

}

module.exports = homeController