let myProfile = require('../data/profileData.json');

module.exports = (app) => {
    const getInfo = (req, res) => {
        res.json(myProfile);
    }

    const updateInfo = (req, res) => {
        myProfile = {...myProfile, ...req.body};
        res.json(myProfile);
    }

    app.get('/api/profile', getInfo);
    app.put('/api/profile', updateInfo);
}