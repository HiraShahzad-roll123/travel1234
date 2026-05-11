import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="signup-page-wrap">
      <div className="signup-card">
        <h2 className="login-title">Create Account</h2>
        <p className="login-sub">Join Project 48 Travel System</p>

        <form>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-input" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" placeholder="Min. 6 chars" required />
          </div>
          <button type="submit" className="btn btn-primary">Create Account</button>
        </form>

        <p className="form-footer mt-2">
          Already have an account? <Link to="/login">Sign in here</Link>
        </p>
      </div>
    </div>
  );
}