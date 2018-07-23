var mongoose = require('mongoose');

var rawDataAggreSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    ExtractionNumber: String,
    PCRRunNumber: String,
    ExtractionSampleNumber: String,
    PunchNumber: String,
    AnimalID: String,
    TissueorSampleType: String,
    CollectionDate: String,
    DNAPerrxn: String,
    SampleName: String,
    WellPosition: String,
    CtMean: String,
    CtSD: String,
    QuantityMean: String,
    QuantitySD: String,
    QtyCVPercent: String,
    CNPerug: String,
    Flag: String,
    QC: String
});

module.exports = mongoose.model('qPCRrawDataAggregation', rawDataAggreSchema);