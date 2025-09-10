<?php
include 'db.php';

$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$card = $_POST['card'];

$stmt = $conn->prepare("INSERT INTO orders (name, email, address, card) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $address, $card);
$stmt->execute();

echo "Order placed successfully!";
?>
