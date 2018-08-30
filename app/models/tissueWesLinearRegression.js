var mongoose = require('mongoose');

var tissueWesLinearRegressionSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    RunNumber: String,
    Slope: Number,
    Intercept: Number,
    RSquare: Number,
}, {timestamps: true});

tissueWesLinearRegressionSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('tissueWesLinearRegression', tissueWesLinearRegressionSchema);