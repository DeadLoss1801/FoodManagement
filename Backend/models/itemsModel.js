// const mongoose = require('mongoose')
// const link = `mongodb+srv://deadloss1801:vblDxst1rRkAOCDw@foodman.0w5n9hk.mongodb.net/?retryWrites=true&w=majority`


// mongoose.connect(link,
//     {
//         useNewUrlParser: true,
//         // useCreateINdex: true,
//         // UseFindAndModify: false
//     }
// ).then(() => {
//     // console.log(con.connections);
//     console.log('DB connection successful');
// })

// const itemSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, 'Name should be present'],
//         unique: true
//     },
//     price: {
//         type: Number,
//         required: [true, 'price should be present'],
//         default: 100
//     },
//     description: {
//         type: String,
//         default: 'This is a tasty indian cousins'
//     },
//     rest_name: {
//         type: String,
//         required: [true, 'rest_name should be present']
//     },
//     item_img: {
//         type: String,
//         default: 'https://static.vecteezy.com/system/resources/previews/003/672/373/large_2x/junk-food-cartoon-design-vector.jpg'
//     },
//     rating: {
//         type: Number,
//         required: true,
//         default: 4.5,
//         validate: (value) => {
//             return value <= 5.0 && value >= 0
//         }
//     }
// })





var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abhi019@#$',
    database: 'db'
});

con.connect(function (err) {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('Databases connected');
})





const itemModel = con;
module.exports = itemModel;
