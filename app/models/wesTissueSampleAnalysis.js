var mongoose = require('mongoose');

var wesTissueSampleAnalysisSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    RunNumber: String,
    AnimalID: Number,
    TimePoint: String,
    ROA: String,
    TissueType: String,
    PunchNumber: String,
    RelativeToInjection: String,
    CollectionDate: String,
    PeakArea: Number,
    ConcngPermL: Number,
    TotalProtein: Number,
    AdjustedConcngPermL: Number,
    ReportedCon: Number,
    LoadingIssue: String,
    ActinLoadingCtrlArea: String,
}, {timestamps: true});

wesTissueSampleAnalysisSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('wesTissueSampleAnalysis', wesTissueSampleAnalysisSchema);