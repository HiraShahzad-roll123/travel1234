import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex min-h-[calc(100vh-130px)]">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-[var(--card-bg)] py-8 flex-shrink-0 border-r border-[var(--border-color)] shadow-sm">
        <div className="px-6 mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AdminPanel</h2>
        </div>
        
        <p className="text-[var(--muted-color)] text-xs font-bold tracking-[2px] uppercase px-6 mb-3">Main Menu</p>
        <Link to="/dashboard" className="flex items-center gap-3 text-primary no-underline py-3 px-6 text-[0.95rem] font-semibold transition-all duration-300 bg-primary/10 border-l-[4px] border-primary">
          <span className="text-lg">📊</span> Overview
        </Link>
        
        <p className="text-[var(--muted-color)] text-xs font-bold tracking-[2px] uppercase px-6 mb-3 mt-8">Management</p>
        <a href="#" className="flex items-center gap-3 text-[var(--muted-color)] no-underline py-3 px-6 text-[0.95rem] font-medium transition-all duration-300 hover:bg-[var(--bg-color)] hover:text-primary hover:border-l-[4px] hover:border-primary">
          <span className="text-lg">👁️</span> View Details
        </a>
        <a href="#" className="flex items-center gap-3 text-[var(--muted-color)] no-underline py-3 px-6 text-[0.95rem] font-medium transition-all duration-300 hover:bg-[var(--bg-color)] hover:text-primary hover:border-l-[4px] hover:border-primary">
          <span className="text-lg">➕</span> Insert Record
        </a>
        <a href="#" className="flex items-center gap-3 text-[var(--muted-color)] no-underline py-3 px-6 text-[0.95rem] font-medium transition-all duration-300 hover:bg-[var(--bg-color)] hover:text-primary hover:border-l-[4px] hover:border-primary">
          <span className="text-lg">✏️</span> Update Record
        </a>
        <a href="#" className="flex items-center gap-3 text-[var(--muted-color)] no-underline py-3 px-6 text-[0.95rem] font-medium transition-all duration-300 hover:bg-[var(--bg-color)] hover:text-primary hover:border-l-[4px] hover:border-primary">
          <span className="text-lg">🗑️</span> Delete Record
        </a>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 p-8 md:p-10 bg-[var(--bg-color)] overflow-y-auto">
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl text-[var(--text-color)] font-extrabold mb-1">Welcome back, Admin 👋</h2>
            <p className="text-[var(--muted-color)] text-[0.95rem]">Here is what's happening with your travel system today.</p>
          </div>
          <button className="bg-primary text-white font-bold py-2.5 px-6 rounded-md hover:bg-secondary transition-colors duration-300 shadow-md flex items-center gap-2">
            <span>⬇️</span> Download Report
          </button>
        </div>

        {/* METRICS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { title: "Total Destinations", value: "124", icon: "🗺️", trend: "+12%", color: "text-info" },
            { title: "Active Bookings", value: "86", icon: "📅", trend: "+5%", color: "text-success" },
            { title: "New Reviews", value: "32", icon: "⭐", trend: "-2%", color: "text-warning" },
            { title: "Revenue (MTD)", value: "$45.2k", icon: "💰", trend: "+18%", color: "text-primary" }
          ].map((card, idx) => (
            <div key={idx} className="bg-[var(--card-bg)] rounded-[12px] p-6 shadow-[0_4px_20px_rgba(102,126,234,0.12)] border border-[var(--border-color)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(102,126,234,0.22)] group cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className={`text-3xl ${card.color} opacity-80 group-hover:scale-110 transition-transform duration-300`}>{card.icon}</div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${card.trend.startsWith('+') ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
                  {card.trend}
                </span>
              </div>
              <h4 className="text-3xl font-extrabold text-[var(--text-color)] mb-1">{card.value}</h4>
              <p className="text-[0.9rem] text-[var(--muted-color)] font-medium">{card.title}</p>
            </div>
          ))}
        </div>

        {/* QUICK ACTION CARDS */}
        <h3 className="text-lg text-[var(--text-color)] font-bold mb-5">Quick Database Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <a href="#" className="bg-[var(--card-bg)] rounded-[10px] py-6 px-5 text-center shadow-sm border border-[var(--border-color)] no-underline text-[var(--text-color)] transition-all duration-300 hover:border-primary hover:shadow-md hover:-translate-y-1">
            <div className="text-2xl mb-2">👁️</div>
            <h4 className="text-[1rem] mb-1 font-semibold">View Details</h4>
            <p className="text-xs text-[var(--muted-color)]">Browse all records</p>
          </a>
          <a href="#" className="bg-[var(--card-bg)] rounded-[10px] py-6 px-5 text-center shadow-sm border border-[var(--border-color)] no-underline text-[var(--text-color)] transition-all duration-300 hover:border-success hover:shadow-md hover:-translate-y-1">
            <div className="text-2xl mb-2">➕</div>
            <h4 className="text-[1rem] mb-1 font-semibold">Insert Record</h4>
            <p className="text-xs text-[var(--muted-color)]">Add new destination</p>
          </a>
          <a href="#" className="bg-[var(--card-bg)] rounded-[10px] py-6 px-5 text-center shadow-sm border border-[var(--border-color)] no-underline text-[var(--text-color)] transition-all duration-300 hover:border-warning hover:shadow-md hover:-translate-y-1">
            <div className="text-2xl mb-2">✏️</div>
            <h4 className="text-[1rem] mb-1 font-semibold">Update Record</h4>
            <p className="text-xs text-[var(--muted-color)]">Modify existing data</p>
          </a>
          <a href="#" className="bg-[var(--card-bg)] rounded-[10px] py-6 px-5 text-center shadow-sm border border-[var(--border-color)] no-underline text-[var(--text-color)] transition-all duration-300 hover:border-danger hover:shadow-md hover:-translate-y-1">
            <div className="text-2xl mb-2">🗑️</div>
            <h4 className="text-[1rem] mb-1 font-semibold">Delete Record</h4>
            <p className="text-xs text-[var(--muted-color)]">Remove old entries</p>
          </a>
        </div>

        {/* GRAPHICAL SECTION & TABLE ROW */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          {/* GRAPHICAL SECTION */}
          <div className="xl:col-span-1 bg-[var(--card-bg)] rounded-[12px] p-6 shadow-[0_4px_20px_rgba(102,126,234,0.12)] border border-[var(--border-color)] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg text-[var(--text-color)] font-bold">Traffic Overview</h3>
              <select className="bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] text-xs rounded-md px-2 py-1 outline-none">
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>
            <div className="flex-1 flex items-end justify-between gap-2 h-48 pb-2 border-b border-[var(--border-color)] mt-auto pt-8">
              {[
                { value: 40, heightClass: "h-[40%]" },
                { value: 70, heightClass: "h-[70%]" },
                { value: 45, heightClass: "h-[45%]" },
                { value: 90, heightClass: "h-[90%]" },
                { value: 65, heightClass: "h-[65%]" },
                { value: 85, heightClass: "h-[85%]" },
                { value: 100, heightClass: "h-[100%]" }
              ].map((data, i) => (
                <div key={i} className={`w-full relative group rounded-t-sm bg-gradient-to-t from-primary/80 to-secondary/80 transition-all duration-300 hover:opacity-100 opacity-70 cursor-pointer ${data.heightClass}`}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--text-color)] text-[var(--bg-color)] text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 font-bold shadow-md">
                    {data.value}%
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-[var(--muted-color)] mt-3 font-medium">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>

          {/* DATABASE TABLE */}
          <div className="xl:col-span-2 bg-[var(--card-bg)] rounded-[12px] p-6 shadow-[0_4px_20px_rgba(102,126,234,0.12)] border border-[var(--border-color)] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg text-[var(--text-color)] font-bold">Record Database Explorer</h3>
              <div className="flex gap-3">
                <input type="text" placeholder="Search records..." className="bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] text-sm rounded-md px-3 py-1.5 outline-none focus:border-primary" />
                <button className="bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-md hover:opacity-90">Filter</button>
              </div>
            </div>
            <div className="overflow-x-auto rounded-lg border border-[var(--border-color)] flex-1">
              <table className="w-full border-collapse bg-[var(--card-bg)] text-left text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-[var(--bg-color)]">
                    <th className="py-3 px-5 font-semibold text-[var(--muted-color)] border-b border-[var(--border-color)]">ID</th>
                    <th className="py-3 px-5 font-semibold text-[var(--muted-color)] border-b border-[var(--border-color)]">Destination Name</th>
                    <th className="py-3 px-5 font-semibold text-[var(--muted-color)] border-b border-[var(--border-color)]">Category</th>
                    <th className="py-3 px-5 font-semibold text-[var(--muted-color)] border-b border-[var(--border-color)]">Status</th>
                    <th className="py-3 px-5 font-semibold text-[var(--muted-color)] border-b border-[var(--border-color)] text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "#048-A", name: "Hunza Valley Expedition", cat: "North", status: "Active", statusColor: "bg-success/20 text-success" },
                    { id: "#048-B", name: "Skardu Luxury Resort", cat: "Mountain", status: "Active", statusColor: "bg-success/20 text-success" },
                    { id: "#048-C", name: "Swat Valley Trek", cat: "Valley", status: "Pending", statusColor: "bg-warning/20 text-warning" },
                    { id: "#048-D", name: "Neelum Valley Tour", cat: "North", status: "Inactive", statusColor: "bg-danger/20 text-danger" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors duration-200 border-b border-[var(--border-color)] last:border-b-0">
                      <td className="py-3.5 px-5 text-[var(--text-color)] font-medium">{row.id}</td>
                      <td className="py-3.5 px-5 text-[var(--text-color)] font-semibold">{row.name}</td>
                      <td className="py-3.5 px-5 text-[var(--muted-color)]">{row.cat}</td>
                      <td className="py-3.5 px-5"><span className={`py-1 px-3 rounded-full text-[0.7rem] font-bold inline-block ${row.statusColor}`}>{row.status}</span></td>
                      <td className="py-3.5 px-5 text-center">
                        <button className="text-[var(--muted-color)] hover:text-primary mx-1 transition-colors" title="Edit">✏️</button>
                        <button className="text-[var(--muted-color)] hover:text-danger mx-1 transition-colors" title="Delete">🗑️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs text-[var(--muted-color)]">Showing 1 to 4 of 124 entries</span>
              <div className="flex gap-1">
                <button className="px-3 py-1 rounded border border-[var(--border-color)] text-xs text-[var(--text-color)] hover:bg-[var(--bg-color)]">Prev</button>
                <button className="px-3 py-1 rounded border border-primary bg-primary/10 text-xs text-primary font-bold">1</button>
                <button className="px-3 py-1 rounded border border-[var(--border-color)] text-xs text-[var(--text-color)] hover:bg-[var(--bg-color)]">2</button>
                <button className="px-3 py-1 rounded border border-[var(--border-color)] text-xs text-[var(--text-color)] hover:bg-[var(--bg-color)]">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}