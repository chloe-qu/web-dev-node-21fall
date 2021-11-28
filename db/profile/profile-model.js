const mongoose = require('mongoose');
let conn2 = mongoose.createConnection('mongodb+srv://qgy826:qgy826@cluster0.aworb.mongodb.net/webdev?retryWrites=true&w=majority');
const schema = require('./profile-schema');
// const model1 = mongoose.model('ProfileModel', schema);
const model1 = conn2.model('ProfileModel', schema);
module.exports = model1;