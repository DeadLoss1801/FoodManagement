const itemsModel = require('../Models/itemsModel')

exports.getAllItems = async (req, res) => {
    try {
        // get the items in this  variable
        const items = await itemsModel.find();

        return res.status(200)
            .json({
                status: 'Success',
                data: {
                    items
                }
            })

    } catch (e) {
        return res.status(400)
            .json({
                status: 'Fail',
                message: e
            })
    }
}
exports.getItem = async (req, res) => {
    try {
        const item = await itemsModel.findById(req.params.id);

        return res.status(200)
            .json({
                status: 'Success',
                data: {
                    item
                }
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
        // create an item
        const item = await itemsModel.create(req.body);
        console.log('Item has been created');


        return res.status(200)
            .json({
                status: 'Success',
                data: {
                    item
                }
            })

    } catch (e) {
        return res.status(400)
            .json({
                status: 'Fail',
                message: e
            })
    }
}


exports.deleteItem = async (req, res) => {
    try {
        const deletedItem = await itemsModel.findByIdAndDelete(req.params.id);

        console.log(deletedItem);

        return res.status(200)
            .json({
                status: 'Success',
                data: null
            })

    } catch (error) {
        return res.status(400)
            .json({
                status: 'Fail',
                message: error
            })
    }
}