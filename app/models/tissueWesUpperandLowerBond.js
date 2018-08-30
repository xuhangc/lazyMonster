var mongoose = require('mongoose');

var tissueWesUpperandLowerBondSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    RunNumber: String,
    ULOQ: Number,
    LLOQ: Number,
}, {timestamps: true});

tissueWesUpperandLowerBondSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('tissueWesUpperandLowerBond', tissueWesUpperandLowerBondSchema);