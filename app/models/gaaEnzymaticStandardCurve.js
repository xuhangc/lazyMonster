var mongoose = require('mongoose');

var gaaEnzymaticStandardCurveSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    RunNumber: String,
    Std: String,
    Conc: Number,
    MeanConc: Number,
    CV: Number,
    PercentRE: Number,
}, {timestamps: true});

gaaEnzymaticStandardCurveSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('gaaEnzymaticStandardCurve', gaaEnzymaticStandardCurveSchema);