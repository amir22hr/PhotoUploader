const mod = require('../helpers/mod');
const Image = require('../models/Image');
const publicIp = require('public-ip');
const date = require('date-and-time');

//Get
const get = async (req, res) => {
    //Delete
    if (req.query.delete) {
        await Image.destroy({
            where: {
                name: req.query.delete
            }
        });
    }
    res.status(302).redirect(mod.routes.home)
}

//Post
const post = async (req, res) => {

    var ip = await publicIp.v4()

    if (req.file) {
        await Image.create({
            user_ip: ip,
            name: req.file.filename,
            format: 'jpeg',
            size: (Number(req.file.size) * 0.0009765625).toString().split(".")[0],
            date: date.format(new Date(), 'YYYY/MM/DD HH:mm:ss'),
        });

        res.render('upload', {
            title: req.file.filename,
            rou: mod.routes,
            proverb: mod.shortSentences(),
            name: req.file.filename,
            format: 'jpeg',
            size: (Number(req.file.size) * 0.0009765625).toString().split(".")[0],
            date: date.format(new Date(), 'YYYY/MM/DD HH:mm:ss'),
        })

    }else{
        res.status(302).redirect(mod.routes.home)
    }
}

module.exports = { get, post }