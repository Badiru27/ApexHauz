const { signIn, signUp } = require('./api/auth/auth.controler');
const { createProperty, updateProperty, deleteProperty,
        getProperty, getPropertyById
} = require('./api/property/property.controller')

const router = require('express').Router()

router.post('/auth/signup', signUp)
router.post('/auth/signin', signIn)

router.post('/property', createProperty)
router.patch('/property/:id', updateProperty)
router.delete('/property/:id', deleteProperty)
router.get('/property', getProperty) 
router.get('/property/:id', getPropertyById)

module.exports = router