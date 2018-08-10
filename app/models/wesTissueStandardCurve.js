var mongoose = require('mongoose');

var wesTissueStandardCurveSchema = mongoose.Schema({
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

wesTissueStandardCurveSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('wesTissueStandardCurve', wesTissueStandardCurveSchema);