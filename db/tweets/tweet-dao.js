const model = require('./tweet-model');

const findAllTweets = () => {
    return model.find();
};
const createTweet = (tweet) => {
    console.log(tweet);
    return model.create(tweet);
};
const deleteTweet = (id) => {
    console.log(model.find());
    return model.deleteOne({_id: id});
};
const updateTweet = (id, tweet) => {
    model.updateOne({_id: id}, {$set: tweet});
};
const findTweetById = (id) => {
    return model.findById(id)
}


module.exports = {
    findAllTweets, createTweet,
    deleteTweet, updateTweet, findTweetById
};
