const { signIn, signUp } = require('./api/auth/auth.controler');
const { createProperty, updateProperty, deleteProperty} = require('./api/property/property.controller')

const router = require('express').Router()

router.post('/auth/signup', signUp)
router.post('/auth/signin', signIn)

router.post('/property', createProperty)
router.patch('/property/:id', updateProperty)
router.delete('/property/:id', deleteProperty)

module.exports = router