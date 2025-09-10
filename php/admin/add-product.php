<?php
include '../db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $price = $_POST['price'];
  $description = $_POST['description'];

  $stmt = $conn->prepare("INSERT INTO products (name, price, description) VALUES (?, ?, ?)");
  $stmt->bind_param("sds", $name, $price, $description);
  $stmt->execute();

  echo "Product added successfully!";
}
?>
