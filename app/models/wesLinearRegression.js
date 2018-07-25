var mongoose = require('mongoose');

var wesLinearRegressionSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ex_users'
    },
    RunNumber: String,
    Slope: String,
    Intercept: String,
    RSquare: String,
}, {timestamps: true});

wesLinearRegressionSchema.index({createdAt: 1}, {expireAfterSeconds: 600});

module.exports = mongoose.model('wesLinearRegression', wesLinearRegressionSchema);