<?php

$username = isset($_POST['username']) ? $_POST['username'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

$accessGranted = true;
$messages = array();

if (!isset($username) || empty($username)) {
    $accessGranted = false;
    $messages[] = 'Oops!, username can not be empty!';
}

if (!isset($password) || empty($password)) {
    $accessGranted = false;
    $messages[] = 'Sorry, password can not be empty!';
}

if ($accessGranted) {
    if ($username === 'justcause' && $password === '$POST_Ekanem') {
        $accessGranted = true;
        $messages[] = 'Successful Login!';
    } else {
        $accessGranted = false;
        $messages[] = 'Incorrect username/password!';
    }
}

echo json_encode(
    array(
        'access granted' => $accessGranted,
        'messages' => $messages
    )
);
