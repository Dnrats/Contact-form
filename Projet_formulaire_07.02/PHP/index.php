<?php

if (isset($_POST['submit'])) {
    $name = $_POST['Name'];
    $subject = $_POST['Subject'];
    $mailFrom = $_POST['Email'];
    $message = $_POST['Message'];

    $mailTo = "a.khliebnikov@codeur.online";
    $headers = "From: ".$mailFrom;
    $txt = "Vous avez recu un courriel de ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
    exit;
}

