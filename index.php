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

    <!-- MAIN CONTENT -->
    <div class="main">
      <?php include 'includes/topbar.php'; ?>

      <div class="content">
        <!-- Admin Sections -->
        <?php include 'pages/admin/dashboard.php'; ?>
        <?php include 'pages/admin/chickens.php'; ?>
        <?php include 'pages/admin/farmers.php'; ?>
        <?php include 'pages/admin/movements.php'; ?>
        <?php include 'pages/admin/alerts.php'; ?>
        <?php include 'pages/admin/analytics.php'; ?>
        <?php include 'pages/admin/zones.php'; ?>
        <?php include 'pages/admin/users.php'; ?>
        <?php include 'pages/admin/reports.php'; ?>
        <?php include 'pages/admin/settings.php'; ?>
        
        <!-- Farmer Sections -->
        <?php include 'pages/farmer/dashboard.php'; ?>
        <?php include 'pages/farmer/my_chickens.php'; ?>
        <?php include 'pages/farmer/map.php'; ?>
        <?php include 'pages/farmer/notifications.php'; ?>
        <?php include 'pages/farmer/zones.php'; ?>
        <?php include 'pages/farmer/reports.php'; ?>
        <?php include 'pages/farmer/profile.php'; ?>
      </div><!-- /content -->
    </div><!-- /main -->

  </div><!-- /layout -->
</div><!-- /app -->

<!-- MODALS -->
<?php include 'modals/modal_chicken.php'; ?>
<?php include 'modals/modal_farmer.php'; ?>
<?php include 'modals/modal_view_chicken.php'; ?>

<!-- App Scripts -->
<script src="assets/js/data.js"></script>
<script src="assets/js/auth.js"></script>
<script src="assets/js/navigation.js"></script>
<script src="assets/js/render.js"></script>
<script src="assets/js/crud.js"></script>
<script src="assets/js/maps.js"></script>
<script src="assets/js/charts.js"></script>
<script src="assets/js/live_updates.js"></script>

</body>
</html>
