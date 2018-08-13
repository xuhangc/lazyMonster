var mongoose = require('mongoose');

var tissueWesStandardCurveSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    RunNumber: String,
    Std: String,
    TPP1ConcngPermL: Number,
    Area: Number,
    BackCalculatedConcngPermL: Number,
    PercentRE: String,
}, {timestamps: true});

tissueWesStandardCurveSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('tissueWesStandardCurve', tissueWesStandardCurveSchema);