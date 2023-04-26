const purchaseModel = require('../models/purchaseModel')

exports.makingPurchase = async (req, res) => {
    try {
        const logs = await purchaseModel.create(req.body);
        console.log(logs);

        return res.status(200)
            .json({
                status: "Suceess",
                message: "Item has been purchased",
                data: {
                    purchase: logs
                }
            })
    } catch (error) {
        console.log(error.message);
        return res.status(401)
            .json({
                status: "Failed",
                message: "ERROR"
            })
    }
}

exports.getAllPurchase = async (req, res) => {
    try {
        const rest_name = req.params.id;
        console.log(rest_name);
        const purchases = await purchaseModel.find({
            rest_name: rest_name
        })

        return res.status(200)
            .json({
                status: "Success",
                data: {
                    purchases
                }
            })
    } catch (error) {
        console.log(error.message);
        return res.status(401)
            .json({
                status: "Failed",
                message: "ERROR"
            })
    }
}