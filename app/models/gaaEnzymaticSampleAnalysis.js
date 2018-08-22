var mongoose = require('mongoose');

var gaaEnzymaticSampleAnalysisSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    RunNumber: String,
    SampleNo: String,
    AnimalID: String,
    Group: String,
    Dose: String,
    Sex: String,
    TimePoint: String,
    CollectionDate: String,
    PreDilutionFactor: String,
    DilutionFactorMRD: String,
    MeanResult: String,
    PercentageCV: String,
    AdjustedResult: String,
    ReportedResult: String,
}, {timestamps: true});

gaaEnzymaticSampleAnalysisSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('gaaEnzymaticSampleAnalysis', gaaEnzymaticSampleAnalysisSchema);