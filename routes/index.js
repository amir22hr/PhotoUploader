const { Router } = require('express');

//config
const router = new Router();
const upload = require('../helpers/upload')
const configImage = require('../helpers/configImage')

//controllers
const homeController = require('../controllers/homeController');
const uploadController = require('../controllers/uploadController')
const _404Controller = require('../controllers/404Controller');

//Home
router.get('/', homeController)
//upload
router.get('/upload', uploadController.get)
router.post('/upload', upload.single('upload-img'), configImage, uploadController.post)
//err 404
router.use(_404Controller)

module.exports = router;
