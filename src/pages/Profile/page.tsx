import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="w-full max-w-[1000px] mx-auto py-12 px-8 min-h-[calc(100vh-130px)]">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <aside className="w-full md:w-72 bg-[var(--card-bg)] rounded-[10px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] p-6 border border-[var(--border-color)] h-fit">
          <div className="text-center mb-8 pb-8 border-b border-[var(--border-color)]">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              HS
            </div>
            <h3 className="text-xl font-bold text-[var(--text-color)]">Hira Shahzad</h3>
            <p className="text-[var(--muted-color)] text-sm">hira.shahzad@example.com</p>
          </div>
          
          <nav className="flex flex-col gap-2">
            <a href="#" className="flex items-center gap-3 py-3 px-4 rounded-md bg-primary/10 text-primary font-semibold transition-all duration-300">
              👤 Personal Info
            </a>
            <a href="#" className="flex items-center gap-3 py-3 px-4 rounded-md text-[var(--text-color)] hover:bg-light-bg dark:hover:bg-gray-800 transition-all duration-300">
              ✈️ My Bookings
            </a>
            <a href="#" className="flex items-center gap-3 py-3 px-4 rounded-md text-[var(--text-color)] hover:bg-light-bg dark:hover:bg-gray-800 transition-all duration-300">
              ❤️ Saved Destinations
            </a>
            <a href="#" className="flex items-center gap-3 py-3 px-4 rounded-md text-[var(--text-color)] hover:bg-light-bg dark:hover:bg-gray-800 transition-all duration-300">
              ⚙️ Settings
            </a>
            <Link to="/login" className="flex items-center gap-3 py-3 px-4 rounded-md text-danger hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 mt-4">
              🚪 Logout
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-[var(--card-bg)] rounded-[10px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] p-8 border border-[var(--border-color)] mb-8">
            <h2 className="text-2xl font-bold text-[var(--text-color)] mb-6">Personal Information</h2>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[var(--text-color)] mb-2">First Name</label>
                <input type="text" defaultValue="Hira" className="w-full bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] rounded-md px-4 py-3 outline-none focus:border-primary transition-all duration-300" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--text-color)] mb-2">Last Name</label>
                <input type="text" defaultValue="Shahzad" className="w-full bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] rounded-md px-4 py-3 outline-none focus:border-primary transition-all duration-300" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[var(--text-color)] mb-2">Email Address</label>
                <input type="email" defaultValue="hira.shahzad@example.com" className="w-full bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] rounded-md px-4 py-3 outline-none focus:border-primary transition-all duration-300" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--text-color)] mb-2">Phone Number</label>
                <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] rounded-md px-4 py-3 outline-none focus:border-primary transition-all duration-300" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--text-color)] mb-2">Location</label>
                <input type="text" defaultValue="Islamabad, Pakistan" className="w-full bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] rounded-md px-4 py-3 outline-none focus:border-primary transition-all duration-300" />
              </div>
              <div className="md:col-span-2 mt-4">
                <button type="button" className="bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-secondary transition-all duration-300 shadow-md">
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          <div className="bg-[var(--card-bg)] rounded-[10px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] p-8 border border-[var(--border-color)]">
            <h2 className="text-2xl font-bold text-[var(--text-color)] mb-6">Recent Activity</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-4 rounded-md bg-[var(--bg-color)] border border-[var(--border-color)]">
                <div className="text-2xl">🎟️</div>
                <div>
                  <h4 className="font-bold text-[var(--text-color)]">Booked Hunza Valley Expedition</h4>
                  <p className="text-[var(--muted-color)] text-sm mt-1">October 15, 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-md bg-[var(--bg-color)] border border-[var(--border-color)]">
                <div className="text-2xl">❤️</div>
                <div>
                  <h4 className="font-bold text-[var(--text-color)]">Saved Skardu Resort to Wishlist</h4>
                  <p className="text-[var(--muted-color)] text-sm mt-1">October 10, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
