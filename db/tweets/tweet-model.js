const mongoose = require('mongoose');
let conn2 = mongoose.createConnection('mongodb+srv://qgy826:qgy826@cluster0.aworb.mongodb.net/webdev?retryWrites=true&w=majority');
const schema = require('./tweet-schema');
// const model = mongoose.model('TweetModel', schema);
const model = conn2.model('TweetModel', schema);
module.exports = model;
