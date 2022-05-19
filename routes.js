const { signIn, signUp } = require('./api/auth/auth.controler');

const router = require('express').Router()

router.post('/auth/signup', signUp)
router.post('/auth/signin', signIn)

module.exports = router