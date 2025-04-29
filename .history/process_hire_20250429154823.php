<?php
require_once 'config/db_connect.php';
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $response = array();

    try {
        // Sanitize input data
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $project_type = filter_var($_POST['project_type'], FILTER_SANITIZE_STRING);
        $project_description = filter_var($_POST['project_description'], FILTER_SANITIZE_STRING);

        // Prepare SQL statement
        $sql = "INSERT INTO hire_requests (name, email, project_type, project_description) 
                VALUES (:name, :email, :project_type, :project_description)";
        
        $stmt = $pdo->prepare($sql);
        
        // Bind parameters
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':project_type', $project_type);
        $stmt->bindParam(':project_description', $project_description);

        // Execute the statement
        $stmt->execute();

        // Send email notification
        $mail = new PHPMailer(true);
        
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'justusotundo86@gmail.com';
        $mail->Password = 'your-app-specific-password';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('justusotundo86@gmail.com', 'Hire Request Notification');
        $mail->addAddress('justusotundo86@gmail.com');

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Hire Request Submission';
        $mail->Body = "
            <h2>New Hire Request Submission</h2>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Project Type:</strong> {$project_type}</p>
            <p><strong>Project Description:</strong> {$project_description}</p>
        ";

        $mail->send();

        $response['status'] = 'success';
        $response['message'] = 'Thank you for your request. I will contact you soon!';
    } catch(Exception $e) {
        $response['status'] = 'error';
        $response['message'] = 'Sorry, there was an error processing your request.';
        error_log('Hire form error: ' . $e->getMessage());
    }

    // Return JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}
?>