const monoogse = require('mongoose')
const UserSchema = monoogse.Schema({
    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
    email: {
        type: String
    },
    password:{
        type: String
    }
})

const user = monoogse.model('users',UserSchema)

module.exports = user