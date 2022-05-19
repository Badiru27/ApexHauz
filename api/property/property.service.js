const pool = require('../../config/database')

module.exports ={
    create: (data, callBack) => {
        pool.query(
            `insert into property(owner, status, price, state, city, address, type, image_url) 
                values(?,?,?,?,?,?,?,?)`,
            [
                data.owner,
                data.status,
                data.price,
                data.state,
                data.city,
                data.address,
                data.type,
                data.image_url
            ],
            (error, result, field) => {

                if (error) {
                    return callBack(error)
                }
              return callBack(null, result)  
            }
        )
    },

    update: (id, data, callBack) => {
        pool.query(
            `update property set status=?, price=?, state=?, city=?, address=?, type=?, image_url=? where id=?`,
            [
                data.status,
                data.price,
                data.state,
                data.city,
                data.address,
                data.type,
                data.image_url,
                id
            ],
            (error, result, field) => {
                if (error) {
                  return callBack(error)
                }
                
                return callBack(null, result)
          }  
      )  
    },

    deleteProp: (id, callBack) => {
        pool.query(
            `delete from property where id=?`,
            [id],
            (error, result, field) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, result)
            }
        )
    }
}