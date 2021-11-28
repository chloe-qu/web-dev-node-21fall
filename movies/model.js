const mongoose = require('mongoose');
// let conn2 = mongoose.createConnection('mongodb+srv://qgy826:qgy826@cluster0.aworb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
let conn2 = mongoose.createConnection('mongodb+srv://qgy826:qgy826@cluster0.aworb.mongodb.net/webdev?retryWrites=true&w=majority');
const schema = require('./schema');
// const model = mongoose.model('MovieModel', schema);
const model = conn2.model('MovieModel', schema);
module.exports = model;
