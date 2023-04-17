const mongoose = require('mongoose')
const link = `mongodb+srv://deadloss1801:vblDxst1rRkAOCDw@foodman.0w5n9hk.mongodb.net/?retryWrites=true&w=majority`
const emailValidator = require('email-validator');


mongoose.connect(link,
    {
        useNewUrlParser: true,
    }
).then(() => {
    // console.log(con.connections);
    console.log('DB connection successful');
})



const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function () {
            return emailValidator.validate(this.email);
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    confirmPassword: {
        type: String,
        required: true,
        minLength: 8,
        validate: function () {
            return this.confirmPassword == this.password;
        }
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    profileImage: {
        type: String,
        default: 'img/user/default.jpeg'
    },
    cart: {
        type: Array,
        default: []
    }

})


userSchema.pre('save', function () {
    this.confirmPassword = undefined;
    // due to this confirm Password doesn not save
})


const userModel = mongoose.model('users', userSchema);

module.exports = userModel;