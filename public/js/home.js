$(document).ready(function () {
    $('#type').on('change', function () {
        if ($(this).val() == "qPCR") {
            $('#option').children().remove();
            $('#option').append('<option value="QC Summary">QC Summary</option>');
            $('#option').append('<option value="Sample Result Summary">Sample Result Summary</option>');
            $('#option').append('<option value="Retest Summary">Retest Summary</option>');
            $('#option').append('<option value="QC Detail Summary">QC Detail Summary</option>');
        } else if ($(this).val() == "wes") {
            $('#option').children().remove();
            $("#option").append('<option value="option6">option6</option>');
            $("#option").append('<option value="option7">option7</option>');
        } else {
            $('#option').children().remove();
            $("#option").append('<option value="option8">option8</option>');

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
           default:
               $("#form").attr("action", "/upload/qPCRqc");
               break;
       }
    });
});