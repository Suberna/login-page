<?php
include 'db.php';

$username = $_POST['username'];
$age = $_POST['age'];
$dob = $_POST['dob'];
$contact = $_POST['contact'];

$stmt = $conn->prepare("UPDATE users SET age=?, dob=?, contact=? WHERE username=?");
$stmt->
