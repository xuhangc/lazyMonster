var mongoose = require('mongoose');

var nabDataSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    RunNumber: String,
    SampleNumber: String,
    SubjectID: String,
    VisitName: String,
    CollectionDate: String,
    MINAverage: Number,
    MAXAverage: Number,
    MAXEVAverage: Number,
    FACT1To100Average: Number,
    MINCVPercentage: Number,
    MAXCVPercentage: Number,
    MAXEVCVPercentage: Number,
    FACT1To100CVPercentage: Number,
    PercentageIMAXFACT1To100: Number,
    EVInterferenceMAXMAXEV: Number,
    EVEfficiencyFACT1To100FACT1To100EV: Number,
    SN: Number,
    S1To1IMAXPercentage: Number,
    S1To2Point5IMAXPercentage: Number,
    S1To5IMAXPercentage: Number,
    S1To10IMAXPercentage: Number,
    S1To100IMAXPercentage: Number,
    S1To1000IMAXPercentage: Number,
    S1To1IEVPercentage: Number,
    S1To2Point5IEVPercentage: Number,
    S1To5IEVPercentage: Number,
    S1To10IEVPercentage: Number,
    S1To100IEVPercentage: Number,
    S1To1000IEVPercentage: Number,
    NAbTiter: String,
    JustifyIfResultisInvalid: String,
}, {timestamps: true});

nabDataSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('nabData', nabDataSchema);