var mongoose = require('mongoose');

var wesStandardCurveSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    RunNumber: String,
    Std: String,
    TPP1ConcngPermL: String,
    Area: String,
    BackCalculatedConcngPermL: String,
    PercentRE: String,
}, {timestamps: true});

wesStandardCurveSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('wesStandardCurve', wesStandardCurveSchema);