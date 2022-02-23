<?php
$regleNomPrenom = "/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ'-]+$/";
$regleEmail = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";
$regleMessage = "/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ',;()-]+$/";

if((isset($_POST['Name']))&&(preg_match($regleNomPrenom, $_POST['Name']))){
    $Name = $_POST['Name'];
}
if((isset($_POST['Email']))&&(preg_match($regleEmail, $_POST['Email']))){
    $Email = $_POST['Email'];
}
if((isset($_POST['Subject']))&&(preg_match($regleMessage, $_POST['Subject']))){
    $Subject = $_POST['Subject'];
}
if((isset($_POST['Message']))&&(preg_match($regleMessage, $_POST['Message']))){
    $Message = $_POST['Message'];
}
if(($Name)&&($Email)&&($Subject)&&($Message)){
    $res = array('validation' => "Email envoyé");
    echo json_encode($res);
    mail("a.khliebnikov@codeur.online", $Sujet, $Message, "From: $Email");
}
/*if (isset($_POST['submit'])) {
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
