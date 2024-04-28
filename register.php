<?php
include 'db.php';

$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

$stmt = $conn->prepare("INSERT INTO users (username, password, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $password, $email);

if ($stmt->execute()) {
    echo "Registration successful";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$stmt->close();
$conn->close();
?>
