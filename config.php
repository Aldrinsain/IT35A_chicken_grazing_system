<?php
// config.php — Database Configuration
// Place this file in the ROOT of your project (same level as index.php)
// ⚠️ Never commit this file to a public Git repository

// ---- Database Credentials ----
define('DB_HOST',     'localhost');
define('DB_NAME',     'chicken_grazing_db');
define('DB_USER',     'root');       // Change this for production
define('DB_PASS',     '');           // Change this for production
define('DB_CHARSET',  'utf8mb4');

// ---- App Settings ----
define('APP_NAME',    'Chicken Grazing Monitoring System');
define('APP_VERSION', '1.0.0');
define('APP_ENV',     'development');  // Change to 'production' when live

// ---- PDO Connection ----
function getDB(): PDO {
  static $pdo = null;

  if ($pdo === null) {
    $dsn = sprintf(
      'mysql:host=%s;dbname=%s;charset=%s',
      DB_HOST, DB_NAME, DB_CHARSET
    );

    $options = [
      PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
      PDO::ATTR_EMULATE_PREPARES   => false,
    ];

    try {
      $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
    } catch (PDOException $e) {
      if (APP_ENV === 'development') {
        die('Database connection failed: ' . $e->getMessage());
      } else {
        die('Database connection failed. Please contact the administrator.');
      }
    }
  }

  return $pdo;
}

// ---- Session Start ----
if (session_status() === PHP_SESSION_NONE) {
  session_start();
}
