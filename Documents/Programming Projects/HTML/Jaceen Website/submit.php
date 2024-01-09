<?php
// Database connection
$conn = new mysqli("localhost", "root", "", "jaceen_contact_form_data");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and escape form data to prevent SQL injection
    $fullname = $conn->real_escape_string($_POST['fullname']);
    $number = $conn->real_escape_string($_POST['number']);
    $email = $conn->real_escape_string($_POST['email']);
    $city = $conn->real_escape_string($_POST['location']);
    $reason = $conn->real_escape_string($_POST['reason']);

    // Insert data into database
    $sql = "INSERT INTO submissions (fullname, number, email, city, reason) VALUES ('$fullname', '$number', '$email', '$city', '$reason')";
    
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
