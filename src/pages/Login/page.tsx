import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="login-page-wrap">
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-sub">Sign in to your WanderLog account</p>

        <form>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" placeholder="you@example.com" required />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" placeholder="Enter password" required />
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>

        <div className="divider">or</div>
        <Link to="/dashboard" className="btn btn-guest">Continue as Guest</Link>
        
        <p className="form-footer mt-2">
          Don't have an account? <Link to="/signup">Register here</Link>
        </p>
      </div>
    </div>
  );
}