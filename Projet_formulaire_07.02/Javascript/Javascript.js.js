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