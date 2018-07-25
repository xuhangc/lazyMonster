var mongoose = require('mongoose');

var nabDataSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
}, {timestamps: true});

nabDataSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('nabData', nabDataSchema);