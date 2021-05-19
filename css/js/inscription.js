$(document).ready(function() {
    $("#inscription").submit(function () {
        // Get the Login Name value and trim it
        var lname = $.trim($("#lname").val());
        var fname = $.trim($("#fname").val());
        var email = $.trim($("#replyto").val());
        var institution = $.trim($("#institution").val());
        var adresse = $.trim($("#adresse").val());
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var isbot = $.trim($("#gotcha").val());

        var valid = true;
        if (isbot === '') {
            if (lname === '') {
                $('#lname_err').removeClass("hide").addClass("show");
                valid = false;
            } else {
                $('#lname_err').removeClass("show").addClass("hide");
            }
            if (fname === '') {
                $('#fname_err').removeClass("hide").addClass("show");
                valid = false;
            } else {
                $('#fname_err').removeClass("show").addClass("hide");
            }
            if (email === '') {
                $('#replyto_err').removeClass("hide").addClass("show");
                valid = false;
            } else if (!emailReg.test(email)) {
                $('#replyto_err').removeClass("show").addClass("hide");
                $('#replyto_err2').removeClass("hide").addClass("show");
                valid = false;
            } else {
                $('#replyto_err').removeClass("show").addClass("hide");
            }
            if (institution === '') {
                $('#institution_err').removeClass("hide").addClass("show");
                valid = false;
            } else {
                $('#institution_err').removeClass("show").addClass("hide");
            }
        }

        if (valid && isbot === '') {
            $("div[class='form-group']").addClass("hide");
            firstmessage = false;
            sendmessage = "<html>Bonjour " + fname + " " + lname + ",<br>Votre inscription aux JFPC 2021 a bien été prise en compte.<br>"
            if (adresse != '') {
                sendmessage += "Vous avez donné l'adresse de livraison suivante :<br>" + adresse.replaceAll("\n", "<br>"); + "<br>";
            }
            sendmessage += "</html>";
            var sessions = [];
            checks = ""
            $("div[id='sessions'] input:checkbox").each(function(){
                sessions.push($(this).attr('value'));
                checks += ",";
                if($(this).prop("checked")) {
                    checks += "1";
                }
            })
            header = "Prénom,Nom,Email,Institution,Adresse," + sessions + "\n";
            datamessage = fname + "," + lname + "," + email + "," + institution + ",\"" + adresse + "\"" + checks + "\n";
            Email.send({
                SecureToken : "7848cce3-c2e6-4ba7-880f-71e13dad1f50",
                To : email,
                From : " jfpc2021@i3s.unice.fr",
                Subject : "[JFPC 2021] Confirmation d'inscription",
                Body : sendmessage
            }).then(
                message => {
                    if (message === "OK") {
                        firstmessage = true;
                    }
                }
            );

            $.ajax({
                url: '../css/js/inscription.php',
                type: 'POST',
                data: {data:datamessage, header:header},
                success: function(data) {
                    $("div[id='success']").removeClass("hide").addClass("show");
                },
                error: function () {
                    $("div[id='success']").removeClass("show").addClass("hide");
                }
            });
        }

        return false;
    });
});
