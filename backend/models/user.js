
//const Schema = mongoose.Schema;
const mongoose = require('mongoose')
let User = new mongoose.Schema({
    id: {
        type: Number
    },
    name:{
        type: String
    },
    contact:{
        type: String
    },
    email: {
        type: String
    },
    datejoined:{
        type: Date
    },
    dateupdated:{
        type: Date
        //default: 'Open'
    }
});


const user= mongoose.model('user', User);
module.exports = user