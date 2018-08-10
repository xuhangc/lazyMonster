var mongoose = require('mongoose');

var wesTissueLinearRegressionSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    RunNumber: String,
    Slope: Number,
    Intercept: Number,
    RSquare: Number,
}, {timestamps: true});

wesTissueLinearRegressionSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('wesTissueLinearRegression', wesTissueLinearRegressionSchema);