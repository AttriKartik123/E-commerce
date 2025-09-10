<?php
include '../db.php';

$result = $conn->query("SELECT * FROM products");
echo "<h1>Admin Dashboard</h1>";
while ($row = $result->fetch_assoc()) {
  echo "<div>{$row['name']} - {$row['price']} $ <a href='delete-product.php?id={$row['id']}'>Delete</a></div>";
}
?>
