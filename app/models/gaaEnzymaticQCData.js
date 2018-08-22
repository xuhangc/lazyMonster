var mongoose = require('mongoose');

var gaaEnzymaticQCDataSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    RunNumber: String,
    QC: String,
    MeanResult: Number,
    CVPercentage: Number,
    AdjResults: Number,
}, {timestamps: true});

gaaEnzymaticQCDataSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('gaaEnzymaticQCData', gaaEnzymaticQCDataSchema);