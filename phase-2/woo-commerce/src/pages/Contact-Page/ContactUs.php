<?php
// Get form data from POST request
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Set up email parameters
$to = 'alkeshrohit2201@gmail.com';
$headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
$message = "Name: " . $name . "\r\n" .
    "Email: " . $email . "\r\n" .
    "Subject: " . $subject . "\r\n" .
    "Message: " . $message;

// Send email
if (mail($to, $subject, $message, $headers)) {
    $response = array('success' => true);
} else {
    $response = array('success' => false);
}
echo json_encode($response);
?>
