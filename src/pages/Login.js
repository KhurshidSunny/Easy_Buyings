function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Login</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="login-input"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="login-input"
        />
        <p className="forgot-password">Forgot password</p>
        <button className="login-button">Login</button>
        <p className="signup-link">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
