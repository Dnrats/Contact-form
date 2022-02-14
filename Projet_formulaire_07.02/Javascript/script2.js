$(document).ready(function () {
    $("form").submit(function (event) {
        var formData = {
            Name: $("#Name").val(),
            Email: $("#Email").val(),
            subject: $("#Subject").val(),
            Message: $("#Message").val(),
        };
        
        $.ajax({
            type: "POST",
            url: "Php.php",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (data) {
            console.log(data);
        });
        
        if (!data.success) {
            if (data.errors.name) {
              $("#name-group").addClass("has-error");
              $("#name-group").append(
                '<div class="help-block">' + data.errors.name + "</div>"
              );
            }
    
            if (data.errors.email) {
              $("#email-group").addClass("has-error");
              $("#email-group").append(
                '<div class="help-block">' + data.errors.email + "</div>"
              );
            }

            if (data.errors.email) {
                $("#subject-group").addClass("has-error");
                $("#subject-group").append(
                  '<div class="help-block">' + data.errors.email + "</div>"
                );
              }
    
            if (data.errors.superheroAlias) {
              $("#message-group").addClass("has-error");
              $("#message-group").append(
                '<div class="help-block">' + data.errors.superheroAlias + "</div>"
              );
            }
          } else {
            $("form").html(
              '<div class="alert alert-success">' + data.message + "</div>"
            );
          }
    
        });

        event.preventDefault();
    });
    
    $("form").submit(function (event) {
        $(".form-group").removeClass("has-error");
        $(".help-block").remove();
      });
      $.ajax({
        type: "POST",
        url: "process.php",
        data: formData,
        dataType: "json",
        encode: true,
      })
        .done(function(data) {
          // ...
        })
        .fail(function (data) {
          $("form").html(
            '<div class="alert alert-danger">Le serveur ne repond pas.</div>'
          );
        });

        
var email = document.querySelector("text2");
email.addEventListener("keyup", function (event) {
  if(email.validity.typeMismatch) {
    email.setCustomValidity("Mettez un message approprié!");
  } else {
    email.setCustomValidity("");
  }
});