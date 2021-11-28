// let myProfile = require('../data/profileData.json');
const dao = require('../db/profile/profile-dao')

module.exports = (app) => {
    const getInfo = (req, res) => {
        dao.findProfile()
            .then(profile => {
                res.json(profile);
            });

    }

    const updateInfo = (req, res) => {
        // myProfile = {...myProfile, ...req.body};
        // res.json(myProfile);
        dao.updateProfile(req.params.id, req.body).then(() => {
            res.sendStatus(200);
        })
    }

    app.get('/api/profile', getInfo);
    app.put('/api/profile', updateInfo);
}