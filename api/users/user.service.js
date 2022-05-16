const pool = require('../../config/database')

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into user(email, first_name, last_name, password, phone, address, is_admin)
                values(?,?,?,?,?,?,?)`,
            [
                data.email,
                data.first_name,
                data.last_name,
                data.password,
                data.phone,
                data.address,
                data.is_admin
            ],
            (error, results, fields) => {
                if (error) {
                return callBack(error)
                }
                return callBack(null, results)
            }
        )
    }
}