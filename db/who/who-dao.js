const model = require('./who-model');

const findAllTweets = () => {
    return model.find();
};
module.exports = {
    findAllTweets
};