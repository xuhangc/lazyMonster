$(document).ready(function () {

    $('#type').on('change', function () {
        if ($(this).val() == "qPCR") {
            $("#form").attr("action", "/upload/qPCRqc");
            $('#option').children().remove();
            $('#option').append('<option value="QC Summary">QC Summary</option>');
            $('#option').append('<option value="Sample Result Summary">Sample Result Summary</option>');
            $('#option').append('<option value="Retest Summary">Retest Summary</option>');
            $('#option').append('<option value="QC Detail Summary">QC Detail Summary</option>');
        } else if ($(this).val() == "wes") {
            $("#form").attr("action", "/upload/wesLinearRegressionDataSummary");
            $('#option').children().remove();
            $("#option").append('<option value="Wes Linear Regression Data Summary">Linear Regression Data Summary</option>');
            $("#option").append('<option value="Wes Standard Curve Data Summary">Standard Curve Data Summary</option>');
            $("#option").append('<option value="Wes Upper and Lower bond Summary">Upper and Lower bond Summary</option>');
            $("#option").append('<option value="Wes QC Data Summary">QC Data Summary</option>');
            $("#option").append('<option value="Wes Sample Analysis Data Summary">Sample Analysis Data Summary</option>');
        } else if ($(this).val() == "westissue") {
            $("#form").attr("action", "/upload/wesTissueLinearRegressionDataSummary");
            $('#option').children().remove();
            $("#option").append('<option value="Tissue Wes Linear Regression Data Summary">Linear Regression Data Summary</option>');
            $("#option").append('<option value="Tissue Wes Standard Curve Data Summary">Standard Curve Data Summary</option>');
            $("#option").append('<option value="Tissue Wes Upper and Lower bond Summary">Upper and Lower bond Summary</option>');
            $("#option").append('<option value="Tissue Wes QC Data Summary">QC Data Summary</option>');
            $("#option").append('<option value="Tissue Wes Sample Analysis Data Summary">Sample Analysis Data Summary</option>');
            $("#option").append('<option value="Tissue Wes Sample Analysis 88 Data Summary">Sample Analysis Data Summary (Peak 88)</option>');
        } else {
            $("#form").attr("action", "/upload/nabDataSummary");
            $('#option').children().remove();
            $("#option").append('<option value="NAB Data Summary">Data Summary</option>');

        }
    });
    $('#option').on('change', function () {
        switch ($(this).val()) {
            case "Sample Result Summary":
                $("#form").attr("action", "/upload/qPCRraw");
                break;
            case "Retest Summary":
                $("#form").attr("action", "/upload/qPCRretest");
                break;
            case "QC Detail Summary":
                $("#form").attr("action", "/upload/qPCReachqc");
                break;
            case "Wes Linear Regression Data Summary":
                $("#form").attr("action", "/upload/wesLinearRegressionDataSummary");
                break;
            case "Wes Standard Curve Data Summary":
                $("#form").attr("action", "/upload/wesStandardCurveDataSummary");
                break;
            case "Wes Upper and Lower bond Summary":
                $("#form").attr("action", "/upload/wesUpperandLowerBondSummary");
                break;
            case "Wes QC Data Summary":
                $("#form").attr("action", "/upload/wesQCDataSummary");
                break;
            case "Wes Sample Analysis Data Summary":
                $("#form").attr("action", "/upload/wesSampleAnalysisDataSummary");
                break;
            case "NAB Data Summary":
                $("#form").attr("action", "/upload/nabDataSummary");
                break;
            case "Tissue Wes Linear Regression Data Summary":
                $("#form").attr("action", "/upload/tissueWesLinearRegressionDataSummary");
                break;
            case "Tissue Wes Standard Curve Data Summary":
                $("#form").attr("action", "/upload/tissueWesStandardCurveDataSummary");
                break;
            case "Tissue Wes Upper and Lower bond Summary":
                $("#form").attr("action", "/upload/tissueWesUpperandLowerBondSummary");
                break;
            case "Tissue Wes QC Data Summary":
                $("#form").attr("action", "/upload/tissueWesQCDataSummary");
                break;
            case "Tissue Wes Sample Analysis Data Summary":
                $("#form").attr("action", "/upload/tissueWesSampleAnalysisDataSummary");
                break;
            case "Tissue Wes Sample Analysis 88 Data Summary":
                $("#form").attr("action", "/upload/tissueWesSampleAnalysis88DataSummary");
                break;
            default:
                $("#form").attr("action", "/upload/qPCRqc");
                break;
        }
    });

    $('#jump').on('change', function () {
        if ($(this).val() == "qPCR") {
            $('#jump-option').children().remove();
            $('#jump-option').append('<option></option>');
            $('#jump-option').append('<option value="/qPCRqc">QC Summary</option>');
            $('#jump-option').append('<option value="/qPCRraw">Sample Result Summary</option>');
            $('#jump-option').append('<option value="/qPCRretest">Retest Summary</option>');
            $('#jump-option').append('<option value="/qPCReachqc">QC Detail Summary</option>');
        } else if ($(this).val() == "wes") {
            $('#jump-option').children().remove();
            $('#jump-option').append('<option></option>');
            $('#jump-option').append('<option value="/wesLinearRegressionDataSummary">Linear Regression Data Summary</option>');
            $('#jump-option').append('<option value="/wesStandardCurveDataSummary">Standard Curve Data Summary</option>');
            $('#jump-option').append('<option value="/wesUpperandLowerBondSummary">Upper and Lower bond Summary</option>');
            $('#jump-option').append('<option value="/wesQCDataSummary">QC Data Summary</option>');
            $('#jump-option').append('<option value="/wesSampleAnalysisDataSummary">Sample Analysis Data Summary</option>');
        } else if ($(this).val() == "empty") {
            $('#jump-option').children().remove();
        } else if ($(this).val() == "westissue") {
            $('#jump-option').children().remove();
            $('#jump-option').append('<option></option>');
            $('#jump-option').append('<option value="/tissueWesLinearRegressionDataSummary">Linear Regression Data Summary</option>');
            $('#jump-option').append('<option value="/tissueWesStandardCurveDataSummary">Standard Curve Data Summary</option>');
            $('#jump-option').append('<option value="/tissueWesUpperandLowerBondSummary">Upper and Lower bond Summary</option>');
            $('#jump-option').append('<option value="/tissueWesQCDataSummary">QC Data Summary</option>');
            $('#jump-option').append('<option value="/tissueWesSampleAnalysisDataSummary">Sample Analysis Data Summary</option>');
            $('#jump-option').append('<option value="/tissueWesSampleAnalysis88DataSummary">Sample Analysis Data Summary (Peak 88)</option>');
        } else {
            $('#jump-option').children().remove();
            $('#jump-option').append('<option></option>');
            $('#jump-option').append('<option value="/nabDataSummary">Data Summary</option>');

        }

    });

    $('#start').click(function () {
        $("#wait").css("display", "block");
    });
});

