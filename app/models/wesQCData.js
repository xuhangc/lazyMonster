var mongoose = require('mongoose');

var wesQCDataSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    RunNumber: String,
    QCIn1To10CSF: String,
    SpikedConcngPermL: String,
    ConcngPermL: String,
    PercentRE: String,
}, {timestamps: true});

wesQCDataSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('wesQCData', wesQCDataSchema);