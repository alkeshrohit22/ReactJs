<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
// Get form data from POST request
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Set up email parameters
$to = 'alkeshrohit2201@gmail.com';

// Message body of the email
$emailBody = "Name: $name\n";
$emailBody .= "Email: $email\n";
$emailBody .= "Subject: $subject\n";
$emailBody .= "Message: $message\n";

// Additional headers
$headers = "From: ".$email ."\r\n";
$headers .= "Reply-To: ".$email."\r\n";
$headers .= "Content-type: text/plain\r\n";


// Send email
if (mail($to, $subject, $emailBody, $headers)) {
    $response = array('success' => true);
} else {
    $response = array('success' => false);
}
echo json_encode($response);

?>
