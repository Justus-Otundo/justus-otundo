<?php
require_once 'config/db_connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $response = array();

    try {
        // Sanitize input data
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

        // Validate email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new Exception('Invalid email format');
        }

        // Prepare SQL statement
        $sql = "INSERT INTO contact_messages (name, email, message) 
                VALUES (:name, :email, :message)";
        
        $stmt = $pdo->prepare($sql);
        
        // Bind parameters
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':message', $message);

        // Execute the statement
        $stmt->execute();

        // Send email notification (optional)
        $to = "justusotundo86@gmail.com";
        $subject = "New Contact Form Submission";
        $email_body = "Name: $name\nEmail: $email\nMessage: $message";
        mail($to, $subject, $email_body);

        $response['status'] = 'success';
        $response['message'] = 'Thank you for your message. I will get back to you soon!';
    } catch(Exception $e) {
        $response['status'] = 'error';
        $response['message'] = 'Database error: ' . $e->getMessage();
        // Add error logging
        error_log('Contact form error: ' . $e->getMessage());
    }

    // Return JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}
?>