<?php
require_once 'config/db_connect.php';

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

        $response['status'] = 'success';
        $response['message'] = 'Thank you for your request. I will contact you soon!';
    } catch(PDOException $e) {
        $response['status'] = 'error';
        $response['message'] = 'Sorry, there was an error processing your request.';
    }

    // Return JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}
?>