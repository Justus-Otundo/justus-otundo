<?php
require_once 'config/db_connect.php';

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