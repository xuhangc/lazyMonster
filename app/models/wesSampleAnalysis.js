var mongoose = require('mongoose');

var wesSampleAnalysisSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    RunNumber: String,
    TimePoint: String,
    AnimalID: Number,
    ConcngPermL: Number,
    Dilution: Number,
    AdjustedConcngPermL: Number,
    Comment: String,
}, {timestamps: true});

wesSampleAnalysisSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('wesSampleAnalysis', wesSampleAnalysisSchema);