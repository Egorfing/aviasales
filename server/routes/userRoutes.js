const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')

router.get('/create', UserController.createUser)
router.post('/update', UserController.updateUser)

module.exports = router