const monoogse = require("mongoose")

let connection = monoogse.connect("mongodb://127.0.0.1:27017/testdb").then((data) => {
console.log("db connected")    

}).catch((err) => {
    console.log(err)
})

module.exports = connection