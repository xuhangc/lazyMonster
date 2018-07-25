var mongoose = require('mongoose');

var QCSummarySchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    PCRRunNumber: String,
    ExtractionDate: String,
    SampleName: String,
    WellPosition: String,
    CtMean: String,
    CtSD: String,
    QuantityMeanPer10uL: String,
    QuantitySDPer10uL: String,
    QuantityCVPer10uL: String,
    QuantityNominalPer10uL: String,
    PercentRE: String,
    QC: String,
}, {timestamps: true});

QCSummarySchema.index({createdAt: 1}, {expireAfterSeconds: 360});

module.exports = mongoose.model('qPCRQCSummary', QCSummarySchema);