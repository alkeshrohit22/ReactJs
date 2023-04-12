<?php
include_once 'connection.php';
header('Access-Control-Allow-Origin: http://localhost:3000');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Function to sanitize form data
function sanitizeData($data) {
    // Remove extra spaces and unwanted symbols
    $data = trim($data);
    $data = preg_replace('/\s+/', ' ', $data);
    $data = preg_replace('/[^a-zA-Z0-9\s]/', '', $data);
    return $data;
}

// Get form data from POST request and sanitize
$name = sanitizeData($_POST['name']);
$email = $_POST['email'];
$subject = sanitizeData($_POST['subject']);
$message = sanitizeData($_POST['message']);

// Create a new PHPMailer object
$mail = new PHPMailer(true);
try {
    // Server settings
    // $mail->SMTPDebug = 2; // Uncomment to view debug log
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'alkesh.rohit@sigmainfo.net';
    $mail->Password = 'Alkesh@Sigma22';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setfrom($email, $name);
    $mail->addAddress('alkeshrohit007@gmail.com', 'Admin');

    // Content
    $mail->Subject = $subject;
    $mail->Body = $message;

    $mail->send();
    echo 'Message has been sent';

    $DBsql = 'CREATE DATABASE IF NOT EXISTS xolo';
    $conn->exec($DBsql);

    $conn->query('use xolo');

    // Create contact_form table if not exists
    $sql = "CREATE TABLE IF NOT EXISTS contact_form (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            subject VARCHAR(255) NOT NULL,
            message TEXT NOT NULL
        )";
    $conn->exec($sql);

    $sql = "INSERT INTO contact_form (name, email, subject, message) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$name, $email, $subject, $message]);

    echo 'Form data has been saved to the database';

    $conn = null;
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}
?>
