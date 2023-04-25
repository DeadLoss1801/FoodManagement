const itemModel = require('../models/itemsModel')

exports.getAllItems = async (req, res) => {
    try {
        await itemModel.query(`SELECT * FROM  ITEMS`, (err, result) => {
            console.log(result);


            return res.status(200)
                .json({
                    status: "Success",
                    data: {
                        result
                    }
                })
        })


    } catch (e) {
        return res.status(400)
            .json({
                status: 'Faiel',
                message: e.message
            })
    }
}
exports.getItem = async (req, res) => {
    try {
        console.log('name', req.params.id);
        await itemModel.query(`SELECT * FROM ITEMS WHERE ITEM_NAME = '${req.params.id}'`, (err, result) => {
            console.log(result);
            return res.status(200)
                .json({
                    status: "Success",
                    data: {
                        result
                    }
                })
        })

    } catch (e) {
        return res.status(400)
            .json({
                status: 'Fail',
                message: e
            })
    }
}

exports.createItem = async (req, res) => {
    try {

        const { name, rest_name, rating, price, item_description, item_img } = req.body;

        console.log(req.body);
        await itemModel.query(`INSERT INTO ITEMS(ITEM_NAME,REST_NAME, RATING, PRICE, ITEM_DESCRIPTION , ITEM_IMG) VALUES ('${name}', '${rest_name}', ${rating}, ${price}, '${item_description}' ,' ${item_img}');`, (err, result) => {

            if (err) throw err;

            return res.status(200)
                .json({
                    status: "Success",
                    data: {
                        result
                    }
                })
        })

    } catch (e) {
        console.log(e);
        return res.status(400)
            .json({
                status: 'Fail',
                message: e
            })
    }
}


exports.deleteItem = async (req, res) => {
    try {


        await itemModel.query(`DELETE FROM ITEMS WHERE ITEM_NAME = ${req.params.id}`, (err, result) => {
            return res.status(200)
                .json({
                    status: "Suceess",
                    data: null
                })
        })

    } catch (error) {
        return res.status(400)
            .json({
                status: 'Fail',
                message: error
            })
    }
}