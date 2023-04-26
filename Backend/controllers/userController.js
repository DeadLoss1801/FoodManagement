
const userModel = require('../models/userModel');

exports.createUser = async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        console.log(user);

        return res.status(200)
            .json({
                status: 'Success',
                data: {
                    user
                }
            })

    } catch (error) {
        console.log(error);
        return res.status(400)
            .json({
                status: 'Fail',
                message: error
            })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email });
        console.log(user);
        if (user) {
            if (user.password == password) {
                console.log(email, password);
                return res.status(200)
                    .json({
                        status: 'Success',
                        message: 'User has been logged in',
                        data: {
                            user
                        }
                    })
            }
            throw error('Wrong Password');
        }
        throw error('User not found!')


    } catch (error) {
        return res.status(400)
            .json({
                status: 'Fail',
                message: error
            })
    }
}


exports.addToCart = async (req, res) => {
    try {
        const value = req.body.value;
        const update = req.body.cart;
        const id = req.params.id;
        console.log('hi');

        const user = await userModel.findOne({ _id: id });


        let temp = user.cart;
        if (value === 1) {
            console.log('Adding this item');
            temp = user.cart;
            temp.push(update);
        } else {
            console.log('Removing this item');
            temp = user.cart.filter((order) => order != update);
        }
        console.log(temp);
        user.cart = temp;
        const data = await userModel.findByIdAndUpdate(id, user);




        return res.status(200)
            .json({
                status: "Success",
                data: {
                    previousData: data
                }
            })
    } catch (error) {
        console.log(error);
        console.log(error);
        return res.status(400)
            .json({
                status: 'Fail',
                message: error
            })
    }
}

exports.getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userModel.findById(id);

        return res.status(200)
            .json({
                status: "Success",
                data: {
                    user
                }
            })

    } catch (error) {
        return res.status(400)
            .json({
                status: 'Fail',
                message: error
            })
    }
}