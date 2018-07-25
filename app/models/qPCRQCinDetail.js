var mongoose = require('mongoose');

var QCinDetailSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
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
}, {timestamps: true});

QCinDetailSchema.index({createdAt: 1}, {expireAfterSeconds: 360});

module.exports = mongoose.model('qPCRQCinDetail', QCinDetailSchema);