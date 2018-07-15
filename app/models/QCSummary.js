var mongoose = require('mongoose');

var QCSummarySchema = mongoose.Schema({
    PCRRunNum: String,
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

module.exports = mongoose.model('QCSummary', QCSummarySchema);