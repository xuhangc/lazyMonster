var fs = require('fs');
var mkdirp = require('mkdirp');
var multer = require('multer');
var path = require('path');
var rimraf = require('rimraf');
var mongoXlsx = require('mongo-xlsx');
var mongoose = require('mongoose');

var qPCRQCSummary = require('../models/qPCRQCSummary');
var qPCRrawDataAggregation = require('../models/qPCRrawDataAggregation');
var qPCRretestInfoAggregation = require('../models/qPCRretestInfoAggregation');
var qPCRQCinDetail = require('../models/qPCRQCinDetail');

var wesLinearRegression = require('../models/wesLinearRegression');
var wesStandardCurve = require('../models/wesStandardCurve');
var wesUpperandLowerBond = require('../models/wesUpperandLowerBond');
var wesQCData = require('../models/wesQCData');
var wesSampleAnalysis = require('../models/wesSampleAnalysis');

var nabData = require('../models/nabData');

var tissueWesLinearRegression = require('../models/tissueWesLinearRegression');
var tissueWesStandardCurve = require('../models/tissueWesStandardCurve');
var tissueWesUpperandLowerBond = require('../models/tissueWesUpperandLowerBond');
var tissueWesQCData = require('../models/tissueWesQCData');
var tissueWesSampleAnalysis = require('../models/tissueWesSampleAnalysis');
var tissueWesSampleAnalysis88 = require('../models/tissueWesSampleAnalysis88');

Date.prototype.yyyymmddhhmm = function () {
    var yyyy = this.getFullYear();
    var mm = this.getMonth() < 9 ? "0" + (this.getMonth() + 1) : (this.getMonth() + 1); // getMonth() is zero-based
    var dd = this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
    var hh = this.getHours() < 10 ? "0" + this.getHours() : this.getHours();
    var min = this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes();
    return "".concat(yyyy).concat(mm).concat(dd).concat(hh).concat(min);
};

exports.qPCRqcSummaryDownload = function (req, res) {
    qPCRQCSummary.find({UserId: req.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            var d = new Date();
            var timestr = d.yyyymmddhhmm();
            res.download(data.fullPath, "qPCR_QC_Summary_" + timestr + ".xlsx", function (err) {
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        qPCRQCSummary.remove({}, function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}

exports.qPCRretestInfoAggregationDownload = function (req, res) {
    qPCRretestInfoAggregation.find({UserId: req.session.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            var d = new Date();
            var timestr = d.yyyymmddhhmm();
            res.download(data.fullPath, "qPCR_Retest_Summary_" + timestr + ".xlsx", function (err) {
                if (err) {
                    console.log(err);
                }
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        qPCRretestInfoAggregation.remove({}, function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}

exports.qPCRrawDataAggregationDownload = function (req, res) {
    qPCRrawDataAggregation.find({UserId: req.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            var d = new Date();
            var timestr = d.yyyymmddhhmm();
            res.download(data.fullPath, "qPCR_Sample_Result_Summary_" + timestr + ".xlsx", function (err) {
                if (err) {
                    console.log(err);
                }
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        qPCRrawDataAggregation.remove({}, function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}

exports.qPCRQCinDetailDownload = function (req, res) {
    qPCRQCinDetail.find({UserId: req.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            var d = new Date();
            var timestr = d.yyyymmddhhmm();
            res.download(data.fullPath, "qPCR_QC_Detail_Summary_" + timestr + ".xlsx", function (err) {
                if (err) {
                    console.log(err);
                }
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        qPCRQCinDetail.remove({}, function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}

exports.wesLinearRegressionDownload = function (req, res) {
    wesLinearRegression.find({UserId: req.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            var d = new Date();
            var timestr = d.yyyymmddhhmm();
            res.download(data.fullPath, "Wes_Linear_Regression_Data_Summary_" + timestr + ".xlsx", function (err) {
                if (err) {
                    console.log(err);
                }
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        wesLinearRegression.remove({}, function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}

exports.wesQCDataDownload = function (req, res) {
    wesQCData.find({UserId: req.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            var d = new Date();
            var timestr = d.yyyymmddhhmm();
            res.download(data.fullPath, "Wes_QC_Data_Summary_" + timestr + ".xlsx", function (err) {
                if (err) {
                    console.log(err);
                }
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        wesQCData.remove({}, function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}

exports.wesSampleAnalysisDownload = function (req, res) {
    wesSampleAnalysis.find({UserId: req.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            var d = new Date();
            var timestr = d.yyyymmddhhmm();
            res.download(data.fullPath, "Wes_Sample_Analysis_Data_Summary_" + timestr + ".xlsx", function (err) {
                if (err) {
                    console.log(err);
                }
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        wesSampleAnalysis.remove({}, function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}

exports.wesStandardCurveDownload = function (req, res) {
    wesStandardCurve.find({UserId: req.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            var d = new Date();
            var timestr = d.yyyymmddhhmm();
            res.download(data.fullPath, "Wes_Standard_Curve_Data_Summary_" + timestr + ".xlsx", function (err) {
                if (err) {
                    console.log(err);
                }
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        wesStandardCurve.remove({}, function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}

exports.wesUpperandLowerBondDownload = function (req, res) {
    wesUpperandLowerBond.find({UserId: req.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            var d = new Date();
            var timestr = d.yyyymmddhhmm();
            res.download(data.fullPath, "Wes_Upper_And_Lower_Bond_Data_Summary_" + timestr + ".xlsx", function (err) {
                if (err) {
                    console.log(err);
                }
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        wesUpperandLowerBond.remove({}, function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}

exports.nabDataDownload = function (req, res) {
    nabData.find({UserId: req.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            var d = new Date();
            var timestr = d.yyyymmddhhmm();
            res.download(data.fullPath, "NAb_Data_Summary_" + timestr + ".xlsx", function (err) {
                if (err) {
                    console.log(err);
                }
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        nabData.remove({}, function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}


exports.tissueWesLinearRegressionDownload = function (req, res) {
    tissueWesLinearRegression.find({UserId: req.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            var d = new Date();
            var timestr = d.yyyymmddhhmm();
            res.download(data.fullPath, "Tissue_Wes_Linear_Regression_Data_Summary_" + timestr + ".xlsx", function (err) {
                if (err) {
                    console.log(err);
                }
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        nabData.remove({}, function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}

exports.tissueWesStandardCurveDownload = function (req, res) {
    tissueWesStandardCurve.find({UserId: req.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            var d = new Date();
            var timestr = d.yyyymmddhhmm();
            res.download(data.fullPath, "Tissue_Wes_Standard_Curve_Data_Summary_" + timestr + ".xlsx", function (err) {
                if (err) {
                    console.log(err);
                }
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        nabData.remove({}, function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}

exports.tissueWesUpperandLowerBondDownload = function (req, res) {
    tissueWesUpperandLowerBond.find({UserId: req.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            var d = new Date();
            var timestr = d.yyyymmddhhmm();
            res.download(data.fullPath, "Tissue_Wes_Upper_and_Lower_Bond_Summary_" + timestr + ".xlsx", function (err) {
                if (err) {
                    console.log(err);
                }
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        nabData.remove({}, function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}

exports.tissueWesQCDataDownload = function (req, res) {
    tissueWesQCData.find({UserId: req.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            var d = new Date();
            var timestr = d.yyyymmddhhmm();
            res.download(data.fullPath, "Tissue_Wes_QC_Data_Summary_" + timestr + ".xlsx", function (err) {
                if (err) {
                    console.log(err);
                }
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        nabData.remove({}, function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}

exports.tissueWesSampleAnalysisDownload = function (req, res) {
    tissueWesSampleAnalysis.find({UserId: req.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            var d = new Date();
            var timestr = d.yyyymmddhhmm();
            res.download(data.fullPath, "Tissue_Wes_Sample_Analysis_Data_Summary_" + timestr + ".xlsx", function (err) {
                if (err) {
                    console.log(err);
                }
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        nabData.remove({}, function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}

exports.tissueWesSampleAnalysis88Download = function (req, res) {
    tissueWesSampleAnalysis88.find({UserId: req.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            var d = new Date();
            var timestr = d.yyyymmddhhmm();
            res.download(data.fullPath, "Tissue_Wes_Sample_Analysis_88Peak_Data_Summary_" + timestr + ".xlsx", function (err) {
                if (err) {
                    console.log(err);
                }
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        nabData.remove({}, function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}