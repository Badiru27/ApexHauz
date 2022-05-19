
const { create, getUserByEmail } = require('./auth.service')

const { genSaltSync, hashSync, compareSync } = require('bcrypt')
const { sign } = require('jsonwebtoken')


module.exports = {
    signUp: (req, res) => {
        const body = req.body
        const salt = genSaltSync(0)
        body.password = hashSync(body.password, salt)

        create(body, (err, result) => {

            if (err) {
                console.log(err)
                return res.status(500).json({
                    status: 'error',
                    message: 'Server error'
                })
            }
            return res.status(200).json({
                status: 'success',
                data: result
            })
        })
    },

    signIn: (req, res) => {
        const body = req.body
        getUserByEmail(body.email, (err, results) => {
            if (err) {
                console.log('err')
            }
            if (!results) {
                return res.json({
                    status: 'error',
                    message: 'Invalid credentials'
                })
            }

            const result = compareSync(body.password, results.password)
            if (result) {
                results.password = undefined
                const jsonToken = sign({ result: results }, 'shgroup30', {
                    expiresIn: '1h'
                })

                return res.json({
                    status: 'success',
                    token: jsonToken,
                    data: results
                })
            } else {
                return res.json({
                    status: 'error',
                    message: 'Invalid credentials'
                })
            }

        })
    }
}