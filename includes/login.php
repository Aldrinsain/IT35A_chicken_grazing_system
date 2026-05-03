<!-- includes/login.php — Login Screen -->
<div id="login-screen">

  <!-- Animated background blobs -->
  <div class="login-bg">
    <div class="blob blob1"></div>
    <div class="blob blob2"></div>
    <div class="blob blob3"></div>
  </div>

  <div class="login-card">

    <!-- Logo -->
    <div class="login-logo">
      <div class="login-icon">🐔</div>
      <div>
        <h2>Chicken Grazing<br>Monitoring System</h2>
        <span>Smart Zone Tracking Platform</span>
      </div>
    </div>
    
    <div class="form-group">
      <label>Username</label>
      <div class="input-wrap">
        <span class="input-icon">👤</span>
        <input type="text" id="login-user" placeholder="Enter username" value="admin"/>
      </div>
    </div>

    <div class="form-group">
      <label>Password</label>
      <div class="input-wrap">
        <span class="input-icon">🔒</span>
        <input type="password" id="login-pass" placeholder="Enter password" value="admin123"/>
      </div>
    </div>

    <div class="form-group">
      <label>Role</label>
      <div class="input-wrap">
        <span class="input-icon">🏷️</span>
        <select id="login-role">
          <option value="admin">Administrator</option>
          <option value="farmer">Farmer</option>
        </select>
      </div>
    </div>

    <button class="login-btn" onclick="doLogin()">
      <span>Log In</span>
      <span class="btn-arrow">→</span>
    </button>

    <div class="demo-creds">
      <p><strong>Demo Credentials:</strong><br>
      Admin — username: <strong>admin</strong> / password: <strong>admin123</strong><br>
      Farmer — username: <strong>farmer</strong> / password: <strong>farm123</strong></p>
    </div>

  </div>
</div>