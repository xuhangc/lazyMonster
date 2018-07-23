var mongoose = require('mongoose');

var QCinDetailSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    createdAt: {
        type: Date,
        expires: '15s',
        default: Date.now
    },
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

module.exports = mongoose.model('qPCRQCinDetail', QCinDetailSchema)