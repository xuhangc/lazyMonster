var mongoose = require('mongoose')

var retestInfoAggreSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    ExtractionNumber: Number,
    PCRRunNumber: String,
    ExtractionSampleNumber: Number,
    PunchNumber: String,
    AnimalID: Number,
    TissueorSampleType: String,
    CollectionDate: String,
    DNAPerrxn: Number,
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
}, {timestamps: true});

retestInfoAggreSchema.index({createdAt: 1}, {expireAfterSeconds: 360});

module.exports = mongoose.model('qPCRretestInfoAggregation', retestInfoAggreSchema);