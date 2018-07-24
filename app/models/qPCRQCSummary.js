var mongoose = require('mongoose');

var QCSummarySchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    createdAt: {
        type: Date,
        required: true,
        default: function () {
            // 60 seconds from now
            return new Date(Date.now() + 60000);
        }
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
    QC: String
});

module.exports = mongoose.model('qPCRQCSummary', QCSummarySchema);