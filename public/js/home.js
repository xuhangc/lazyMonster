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
                window.alert();
                $("#form").attr("action", "/upload/qPCReachqc");
                break;
            case "Wes Linear Regression Data Summary":
                window.alert();
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
            default:
                $("#form").attr("action", "/upload/qPCRqc");
                break;
        }
    });
});