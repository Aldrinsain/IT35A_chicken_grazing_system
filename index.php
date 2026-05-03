<?php
// index.php — Main entry point
// In a real system, session auth would be handled here
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chicken Grazing Monitoring System</title>

  <!-- External Libraries -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>

  <!-- App Styles -->
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<?php include 'includes/login.php'; ?>

<!-- APP SHELL -->
<div id="app">
  <div class="layout">

    <!-- SIDEBAR -->
    <?php include 'includes/sidebar.php'; ?>

    