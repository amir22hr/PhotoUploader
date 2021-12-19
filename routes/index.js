const { Router } = require('express');

//config
const router = new Router();
//-----multer-----
const multer = require('multer')
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});
const upload = multer({ storage: fileStorageEngine })
//----------

//controllers
const homeController = require('../controllers/homeController');
const uploadController = require('../controllers/uploadController')
const _404Controller = require('../controllers/404Controller');

//Home
router.get('/', homeController)
//upload
router.get('/upload', uploadController.get)
router.post('/upload', upload.single('upload-img'), uploadController.post)
//err 404
router.use(_404Controller)

module.exports = router;
