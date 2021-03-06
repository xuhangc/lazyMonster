var mongoose = require('mongoose');

var wesUpperandLowerBondSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    RunNumber: String,
    ULOQ: Number,
    LLOQ: Number,
}, {timestamps: true});

wesUpperandLowerBondSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('wesUpperandLowerBond', wesUpperandLowerBondSchema);