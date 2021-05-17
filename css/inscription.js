$(document).ready(function() {
    $("#inscription").submit(function () {
        // Get the Login Name value and trim it
        var lname = $.trim($('#_lname').val());
        var fname = $.trim($('#_fname').val());
        var email = $.trim($("#_replyto").val());
        var institution = $.trim($("#institution").val());

        var valid = true;
        // Check if empty of not
        if (lname === '') {
            $('#_lname_err').removeClass("hide").addClass("show");
            valid = false;
        } else {
            $('#_lname_err').removeClass("show").addClass("hide");
        }
        if (fname === '') {
            $('#_fname_err').removeClass("hide").addClass("show");
            valid = false;
        } else {
            $('#_fname_err').removeClass("show").addClass("hide");
        }
        if (email === '') {
            $('#_replyto_err').removeClass("hide").addClass("show");
            valid = false;
        } else {
            $('#_replyto_err').removeClass("show").addClass("hide");
        }
        if (institution === '') {
            $('#institution_err').removeClass("hide").addClass("show");
            valid = false;
        } else {
            $('#institution_err').removeClass("show").addClass("hide");
        }

        if (valid) {
            $("div[class='form-group']").addClass("hide");
            $("div[id='success']").removeClass("hide").addClass("show");
        }

        return false;
    });
});
