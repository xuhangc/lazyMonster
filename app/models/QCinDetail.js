var mongoose = require('mongoose');

var QCinDetailSchema = mongoose.Schema({
    PCRRunNumber: String,
    ExtractionDate: String,
    Well: String,
    WellPosition: String,
    Omit: String,
    SampleName: String,
    TargetName: String,
    Task: String,
    Reporter: String,
    Quencher: String,
    CT: String,
    CtMean: String,
    CtSD: String,
    Quantity: String,
    QuantityMean: String,
    QuantitySD: String
});

module.exports = mongoose.model('QCinDetail', QCinDetailSchema)