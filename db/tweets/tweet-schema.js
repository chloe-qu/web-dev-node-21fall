const mongoose = require('mongoose');
const schema = mongoose.Schema({
    topic: String,
    user_icon: String,
    // posted: {type: Date, defaultValue: Date.now},
    userName: String,
    handle: String,
    time: String,
    verified: {type: Boolean, defaultValue: false},
    // title: String,
    tweet: String,
    // attachments: {
    //     image: String
    // },

    // "logo-image": String,
    // "avatar-image": String,
    link_image: String,
    link_title: String,
    link_summary: String,
    stats: {
        comments: {type: Number, defaultValue: 0},
        retweets: {type: Number, defaultValue: 0},
        likes: {type: Number, defaultValue: 0}
    },
    liked: {type: Boolean, defaultValue: false}
}, {collection: "tweets"});
module.exports = schema;
