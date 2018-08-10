var mongoose = require('mongoose');

var wesTissueQCDataSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    RunNumber: String,
    QCIn1To10CSF: String,
    SpikedConcngPermL: Number,
    Area: Number,
    ConcngPermL: Number,
    PercentRE: Number,
}, {timestamps: true});

wesTissueQCDataSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('wesTissueQCData', wesTissueQCDataSchema);