import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    /* This wrapper triggers the flexbox layout for sidebar + main content */
    <div className="flex min-h-[calc(100vh-130px)]">
      
      {/* SIDEBAR */}
      <aside className="w-60 bg-nav-bg py-6 flex-shrink-0">
        <p className="text-text-muted text-[0.7rem] font-bold tracking-[1.5px] uppercase px-6 mb-2 mt-5">Menu</p>
        <Link to="/dashboard" className="flex items-center gap-3 text-white no-underline py-2.5 px-6 text-[0.92rem] transition-all duration-300 bg-[rgba(102,126,234,0.2)] border-l-[3px] border-primary">Overview</Link>
        
        <p className="text-text-muted text-[0.7rem] font-bold tracking-[1.5px] uppercase px-6 mb-2 mt-5">Records</p>
        {/* We use # here for links that aren't built yet, or Link if you have pages */}
        <a href="#" className="flex items-center gap-3 text-[#a0aec0] no-underline py-2.5 px-6 text-[0.92rem] transition-all duration-300 hover:bg-[rgba(102,126,234,0.15)] hover:text-white hover:border-l-[3px] hover:border-primary">View Details</a>
        <a href="#" className="flex items-center gap-3 text-[#a0aec0] no-underline py-2.5 px-6 text-[0.92rem] transition-all duration-300 hover:bg-[rgba(102,126,234,0.15)] hover:text-white hover:border-l-[3px] hover:border-primary">Insert Record</a>
        <a href="#" className="flex items-center gap-3 text-[#a0aec0] no-underline py-2.5 px-6 text-[0.92rem] transition-all duration-300 hover:bg-[rgba(102,126,234,0.15)] hover:text-white hover:border-l-[3px] hover:border-primary">Update Record</a>
        <a href="#" className="flex items-center gap-3 text-[#a0aec0] no-underline py-2.5 px-6 text-[0.92rem] transition-all duration-300 hover:bg-[rgba(102,126,234,0.15)] hover:text-white hover:border-l-[3px] hover:border-primary">Delete Record</a>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 p-8 bg-light-bg overflow-y-auto">
        <div className="mb-8">
          <h2 className="text-[1.6rem] text-text-main font-bold">Admin Dashboard 👋</h2>
          <p className="text-text-muted mt-1">Project 48: Travel Blog System Management</p>
        </div>

        {/* 4 ACTION CARDS (Grid layout) */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5 mb-8">
          <a href="#" className="bg-white rounded-[10px] py-7 px-5 text-center shadow-[0_4px_20px_rgba(102,126,234,0.12)] no-underline text-text-main transition-all duration-300 border-2 border-transparent block hover:border-primary hover:-translate-y-1">
            <h4 className="text-base mb-1 text-secondary font-semibold">View Details</h4>
            <p className="text-[0.82rem] text-text-muted">Browse all destinations</p>
          </a>
          <a href="#" className="bg-white rounded-[10px] py-7 px-5 text-center shadow-[0_4px_20px_rgba(102,126,234,0.12)] no-underline text-text-main transition-all duration-300 border-2 border-transparent block hover:border-primary hover:-translate-y-1">
            <h4 className="text-base mb-1 text-secondary font-semibold">Insert Record</h4>
            <p className="text-[0.82rem] text-text-muted">Add new travel post</p>
          </a>
          <a href="#" className="bg-white rounded-[10px] py-7 px-5 text-center shadow-[0_4px_20px_rgba(102,126,234,0.12)] no-underline text-text-main transition-all duration-300 border-2 border-transparent block hover:border-primary hover:-translate-y-1">
            <h4 className="text-base mb-1 text-secondary font-semibold">Update Record</h4>
            <p className="text-[0.82rem] text-text-muted">Modify existing data</p>
          </a>
          <a href="#" className="bg-white rounded-[10px] py-7 px-5 text-center shadow-[0_4px_20px_rgba(102,126,234,0.12)] no-underline text-text-main transition-all duration-300 border-2 border-transparent block hover:border-primary hover:-translate-y-1">
            <h4 className="text-base mb-1 text-secondary font-semibold">Delete Record</h4>
            <p className="text-[0.82rem] text-text-muted">Remove travel records</p>
          </a>
        </div>

        {/* GRAPHICAL SECTION (Bar Chart) */}
        <div className="mb-8">
          <div className="bg-white rounded-[10px] p-6 shadow-[0_4px_20px_rgba(102,126,234,0.12)]">
            <h3 className="text-base text-text-main mb-5 font-semibold">📊 Monthly Traffic</h3>
            <div className="flex items-end gap-3 h-40 pb-2 border-b-2 border-border-color">
              {/* These bar heights use inline styles since they are dynamic values */}
              <div className="flex-1 rounded-t bg-gradient-to-b from-primary to-secondary transition-all duration-300 hover:opacity-75" style={{ height: "90%" }}></div>
              <div className="flex-1 rounded-t bg-gradient-to-b from-primary to-secondary transition-all duration-300 hover:opacity-75" style={{ height: "80%" }}></div>
              <div className="flex-1 rounded-t bg-gradient-to-b from-primary to-secondary transition-all duration-300 hover:opacity-75" style={{ height: "65%" }}></div>
            </div>
          </div>
        </div>

        {/* DATABASE TABLE */}
        <div className="bg-white rounded-[10px] p-6 shadow-[0_4px_20px_rgba(102,126,234,0.12)] mb-8">
          <h3 className="text-base mb-4 text-text-main font-semibold">📋 Recent Database Records</h3>
          <table className="data-table w-full border-collapse bg-white rounded-[10px] overflow-hidden shadow-[0_4px_20px_rgba(102,126,234,0.12)] mb-6">
            <thead>
              <tr>
                <th className="bg-gradient-to-br from-primary to-secondary text-white py-3.5 px-4 text-left text-[0.9rem]">ID</th>
                <th className="bg-gradient-to-br from-primary to-secondary text-white py-3.5 px-4 text-left text-[0.9rem]">Destination</th>
                <th className="bg-gradient-to-br from-primary to-secondary text-white py-3.5 px-4 text-left text-[0.9rem]">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b border-border-color text-[0.92rem]">048-A</td>
                <td className="py-3 px-4 border-b border-border-color text-[0.92rem]">Hunza Valley</td>
                {/* Two classes used for the badge */}
                <td className="py-3 px-4 border-b border-border-color text-[0.92rem]"><span className="py-[3px] px-3 rounded-full text-[0.78rem] font-semibold inline-block bg-[#d1fae5] text-[#065f46]">Active</span></td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b border-border-color text-[0.92rem]">048-B</td>
                <td className="py-3 px-4 border-b border-border-color text-[0.92rem]">Skardu Resort</td>
                <td className="py-3 px-4 border-b border-border-color text-[0.92rem]"><span className="py-[3px] px-3 rounded-full text-[0.78rem] font-semibold inline-block bg-[#d1fae5] text-[#065f46]">Active</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}