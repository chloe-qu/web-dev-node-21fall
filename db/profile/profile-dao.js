const model = require('./profile-model');

const findProfile = () => {
    return model.find();
};
const updateProfile = (id, myProfile) => {
    return model.updateOne({_id: id}, {$set: myProfile});
};
module.exports = {
    findProfile, updateProfile
};