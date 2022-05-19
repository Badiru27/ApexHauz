
const { create, update, deleteProp, getProp} = require('./property.service')
 
module.exports = {
    createProperty: (req, res)=> {
        const body = req.body

        create(body, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    status: 'error',
                    message: 'Server error'
                })
            }

            return res.status(200).json({
                status: 'success',
                data: results
            })
        })
    },

    updateProperty:(req, res)=> {
        const body = req.body
        const id = req.params.id
        update(id, body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: 'error',
                    message: 'Server error'
                })
            }

            return res.status(200).json({
                status: 'success',
                massage: 'Updated successfully',
                data: results
            })
        })
    },

    deleteProperty:(req, res) =>{
        const id = req.params.id
        deleteProp(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: 'error',
                    message: 'Server error'
                })
            }

            return res.status(200).json({
                status: 'success',
                massage: 'Deleted successfully',

            })
        })
    },

    getProperty: (req, res) => {
        getProp((err, results) => {
            if (err) {
                return res.status(500).json({
                    status: 'error',
                    message: 'Server error'
                })
            }

            return res.status(200).json({
                status: 'success',
                data: results

            }) 
        })
    },


}

