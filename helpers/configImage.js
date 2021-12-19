const sharp = require('sharp');
var fs = require('fs');

const configImage = async (req, res, next) => {
    await sharp(req.file.path)
        .resize(400)
        .jpeg({ mozjpeg: true })
        .toFile(`./public/images/${req.file.filename}`);
    await fs.unlinkSync(req.file.path);
    next()
}

module.exports = configImage