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
        
        event.preventDefault();
    });
});

var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    error.innerHTML = ""; // 
    error.className = "error"; 
  }
}, false);
form.addEventListener("submit", function (event) {
  if (!email.validity.valid) {
    error.innerHTML = "J'attends une adresse e-mail correcte, mon cher !";
    error.className = "error active";
    event.preventDefault();
  }
}, false);