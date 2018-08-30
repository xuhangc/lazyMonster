var mongoose = require('mongoose');

var gaaEnzymaticUpperandLowerBondSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    RunNumber: String,
    ULOQ: String,
    LLOQ: String,
}, {timestamps: true});

gaaEnzymaticUpperandLowerBondSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('gaaEnzymaticUpperandLowerBond', gaaEnzymaticUpperandLowerBondSchema);