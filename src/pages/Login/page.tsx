import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-[calc(100vh-130px)] flex items-center justify-center p-10 bg-light-bg">
      <div className="bg-white rounded-[10px] shadow-[0_8px_40px_rgba(102,126,234,0.18)] py-12 px-12 w-full max-w-[460px]">
        <h2 className="text-secondary text-[1.6rem] mb-2 text-center font-bold">Welcome Back!</h2>
        <p className="text-text-muted text-[0.9rem] mb-8 text-center">Sign in to your WanderLog account</p>
        <form>
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-text-main text-[0.9rem]">Email Address</label>
            <input type="email" className="w-full py-3 px-4 border-[1.5px] border-border-color rounded-md text-[0.95rem] transition-all duration-300 bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(102,126,234,0.15)]" placeholder="you@example.com" required />
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-text-main text-[0.9rem]">Password</label>
            <input type="password" className="w-full py-3 px-4 border-[1.5px] border-border-color rounded-md text-[0.95rem] transition-all duration-300 bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(102,126,234,0.15)]" placeholder="Enter password" required />
          </div>
          <button type="submit" className="cursor-pointer border-none rounded-md transition-all duration-300 inline-block font-semibold text-center py-3 px-6 text-[0.95rem] bg-gradient-to-br from-primary to-secondary text-white hover:opacity-88 hover:-translate-y-px w-full">Sign In</button>
        </form>
        <div className="divider flex items-center gap-4 my-6 text-text-muted text-[0.85rem]">or</div>
        <Link to="/dashboard" className="bg-nav-bg text-white block text-center py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 hover:bg-primary">Continue as Guest</Link>
        <p className="text-center mt-5 text-text-muted text-[0.9rem]">
          Don't have an account? <Link to="/signup" className="text-primary no-underline font-semibold">Register here</Link>
        </p>
      </div>
    </div>
  );
}