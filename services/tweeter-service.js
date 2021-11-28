// let tweets = require('../data/tweets.json');
const dao = require('../db/tweets/tweet-dao');

module.exports = (app) => {

    // const findAllTweets = (req, res) => {
    //     res.json(tweets);
    // }
    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));


    const postNewTweet = (req, res) => {
        dao.createTweet( {
        //const newTweet = {
            //_id: (new Date()).getTime() + '',
            "topic": "Web Development",
            "userName": "Elon Musk",
            "verified": false,
            "handle": "@elonmusk",
            "time": "2h",
            "user_icon": "../../../media/user-icon-elonmusk.jpeg",
            "logo_image": "../../../media/user-icon-elonmusk.jpeg",
            "link_image": "",
            "link_title": "",
            "link_summary": "",
            "liked": false,
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            ...req.body
        }).then(newTweet => res.json(newTweet));
        // tweets = [
        //     newTweet,
        //     ...tweets
        // ];
        // res.json(newTweet);
    }

    const deleteTweet = (req, res) => {
        // const id = req.params['id'];
        // tweets = tweets.filter(tweet => tweet._id !== id);
        // res.sendStatus(200);
        dao.deleteTweet(req.params.id).then((status) => res.send(status));
    }

    const likeTweet = (req, res) => {
        // const id = req.params['id'];
        // tweets = tweets.map(tweet => {
        //     if (tweet._id === id) {
        //         if (tweet.liked === true) {
        //             tweet.liked = false;
        //             tweet.stats.likes--;
        //         } else {
        //             tweet.liked = true;
        //             tweet.stats.likes++;
        //         }
        //         return tweet;
        //     } else {
        //         return tweet;
        //     }
        // });
        // res.sendStatus(200);
        let likedBefore = false;
        let count = 0;
        dao.findTweetById(req.params.id).then(info => {
            likedBefore = info.liked;
            count = info.stats.likes;
        }).then(() => {
            if (likedBefore === true) {
                likedBefore = false;
                count--;
            } else {
                likedBefore = true;
                count++;
            }
        }
        ).then(() => {
            dao.updateTweet(req.params.id, {liked: likedBefore, 'stats.likes': count});
        }).then(() => {
            res.sendStatus(200);
        })
    }


    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.get('/api/tweets', findAllTweets);
    app.post('/api/tweets', postNewTweet);
};
