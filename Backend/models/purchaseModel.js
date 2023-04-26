const mongoose = require('mongoose')
const link = `mongodb+srv://deadloss1801:vblDxst1rRkAOCDw@foodman.0w5n9hk.mongodb.net/?retryWrites=true&w=majority`


mongoose.connect(link,
    {
        useNewUrlParser: true,
    }
).then(() => {
    // console.log(con.connections);
    console.log('DB connection successful');
})


const purchaseSchema = new mongoose.Schema({
    rest_name: {
        type: String,
        required: [true, 'Restaurant name should be present']
    },
    cust_name: {
        type: String,
        required: [true, 'Customer name should be present']
    },
    price: {
        type: Number,
        required: [true, 'Price should be present']
    }
    ,
    order_type: {
        type: String,
        enum: ['Dine-in', 'TakeAway'],
        required: [true, 'Order_type shold be define ']
    },
    food_items: {
        type: Array,
        required: [true, 'Cannot be empty ']
    }

})

const purchaseModel = new mongoose.model('Purchase', purchaseSchema);

module.exports = purchaseModel;