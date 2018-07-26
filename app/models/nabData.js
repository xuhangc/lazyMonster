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
    MINAverage: String,
    MAXAverage: String,
    MAXEVAverage: String,
    FACT1To100Average: String,
    MINCVPercentage: String,
    MAXCVPercentage: String,
    MAXEVCVPercentage: String,
    FACT1To100CVPercentage: String,
    PercentageIMAXFACT1To100: String,
    EVInterferenceMAXMAXEV: String,
    EVEfficiencyFACT1To100FACT1To100EV: String,
    SN: String,
    S1To1IMAXPercentage: String,
    S1To2Point5IMAXPercentage: String,
    S1To5IMAXPercentage: String,
    S1To10IMAXPercentage: String,
    S1To100IMAXPercentage: String,
    S1To1000IMAXPercentage: String,
    S1To1IEVPercentage: String,
    S1To2Point5IEVPercentage: String,
    S1To5IEVPercentage: String,
    S1To10IEVPercentage: String,
    S1To100IEVPercentage: String,
    S1To1000IEVPercentage: String,
    NAbTiter: String,
    JustifyIfResultisInvalid: String,
}, {timestamps: true});

nabDataSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('nabData', nabDataSchema);