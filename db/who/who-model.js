const mongoose = require('mongoose');
let conn2 = mongoose.createConnection('mongodb+srv://qgy826:qgy826@cluster0.aworb.mongodb.net/webdev?retryWrites=true&w=majority');
const schema = require('./who-schema');

// const model1 = mongoose.model('WhoModel', schema);
const model1 = conn2.model('WhoModel', schema);
module.exports = model1;