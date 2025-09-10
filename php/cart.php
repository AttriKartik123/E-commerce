<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $product = $_POST['product'];
  $_SESSION['cart'][] = $product;
  echo "Product added to cart!";
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  echo json_encode($_SESSION['cart'] ?? []);
}
?>
