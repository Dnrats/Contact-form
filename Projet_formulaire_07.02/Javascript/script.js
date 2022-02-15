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
function submitForm(e, form){
  e.preventDefault();
  
  fetch('index.php', {
    method: 'post',
    body: JSON.stringify({name: form.Name.value, email: form.Email.value, subject: form.Subject.value, message: form.Message.value})
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    //Success code goes here
    alert('form submited')
  }).catch(function(err) {
    //Failure
    alert('Error')
  });
}

function send(e,form) {
  fetch(form.action, {method:'post', body: new FormData(form)});

  console.log('We send post asynchronously (AJAX)');
  e.preventDefault();
}