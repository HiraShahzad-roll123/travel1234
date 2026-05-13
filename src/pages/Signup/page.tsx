import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="min-h-[calc(100vh-130px)] flex items-center justify-center p-10 bg-light-bg">
      <div className="bg-white rounded-[10px] shadow-[0_8px_40px_rgba(102,126,234,0.18)] py-12 px-12 w-full max-w-[480px]">
        <h2 className="text-secondary text-[1.6rem] mb-2 text-center font-bold">Create Account</h2>
        <p className="text-text-muted text-[0.9rem] mb-8 text-center">Join Project 48 Travel System</p>
        <form>
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-text-main text-[0.9rem]">Full Name</label>
            <input type="text" className="w-full py-3 px-4 border-[1.5px] border-border-color rounded-md text-[0.95rem] transition-all duration-300 bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(102,126,234,0.15)]" placeholder="John Doe" required />
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-text-main text-[0.9rem]">Password</label>
            <input type="password" className="w-full py-3 px-4 border-[1.5px] border-border-color rounded-md text-[0.95rem] transition-all duration-300 bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(102,126,234,0.15)]" placeholder="Min. 6 chars" required />
          </div>
          <button type="submit" className="cursor-pointer border-none rounded-md transition-all duration-300 font-semibold text-center py-3 px-6 text-[0.95rem] bg-gradient-to-br from-primary to-secondary text-white hover:opacity-88 hover:-translate-y-px w-full">Create Account</button>
        </form>
        <p className="text-center mt-6 text-text-muted text-[0.9rem]">
          Already have an account? <Link to="/login" className="text-primary no-underline font-semibold">Sign in here</Link>
        </p>
      </div>
    </div>
  );
}