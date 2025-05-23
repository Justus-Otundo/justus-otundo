<?php
require_once 'config/db_connect.php';
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Set proper headers
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    
    $response = array();

    try {
        // Debug: Log POST data
        error_log('POST data: ' . print_r($_POST, true));

        // Sanitize input data
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

        // Debug: Log sanitized data
        error_log("Sanitized data - Name: $name, Email: $email, Message: $message");

        // Validate email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new Exception('Invalid email format');
        }

        // Prepare SQL statement
        $sql = "INSERT INTO contact_messages (name, email, message) VALUES (:name, :email, :message)";
        
        $stmt = $pdo->prepare($sql);
        
        // Bind parameters and execute
        $result = $stmt->execute([
            ':name' => $name,
            ':email' => $email,
            ':message' => $message
        ]);

        if (!$result) {
            throw new Exception(print_r($stmt->errorInfo(), true));
        }

        // Send email notification
        $mail = new PHPMailer(true);
        
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  // Use Gmail SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'justusotundo86@gmail.com';  // Your Gmail address
        $mail->Password = 'your-app-specific-password';  // Your Gmail app password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('justusotundo86@gmail.com', 'Contact Form Notification');
        $mail->addAddress('justusotundo86@gmail.com');

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body = "
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Message:</strong> {$message}</p>
        ";

        $mail->send();
        
        $response['status'] = 'success';
        $response['message'] = 'Thank you for your message. I will get back to you soon!';
        
    } catch(Exception $e) {
        $response['status'] = 'error';
        $response['message'] = $e->getMessage();
        error_log('Contact form error: ' . $e->getMessage());
    }

    echo json_encode($response);
    exit;
}
?>