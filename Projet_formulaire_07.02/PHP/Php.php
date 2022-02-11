<?php

$errors = [];
$data = [];

if (empty($_POST['Name'])) {
    $errors['Name'] = 'Mettez votre nom!.';
}

if (empty($_POST['Email'])) {
    $errors['Email'] = 'Mettez votre E-mail!.';
}

if (empty($_POST['Subject'])) {
    $errors['Subject'] = 'Mettez le sujet de votre demande!.';
}
if (empty($_POST['Message'])) {
    $errors['Message'] = 'Mettez votre message!.';
}

if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else {
    $data['success'] = true;
    $data['message'] = 'Success!';
}

echo json_encode($data);