import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    /* This wrapper triggers the flexbox layout for sidebar + main content */
    <div className="dashboard-layout">
      
      {/* SIDEBAR */}
      <aside className="sidebar">
        <p className="sidebar-title">Menu</p>
        <Link to="/dashboard" className="sidebar-link active">Overview</Link>
        
        <p className="sidebar-title">Records</p>
        {/* We use # here for links that aren't built yet, or Link if you have pages */}
        <a href="#" className="sidebar-link">View Details</a>
        <a href="#" className="sidebar-link">Insert Record</a>
        <a href="#" className="sidebar-link">Update Record</a>
        <a href="#" className="sidebar-link">Delete Record</a>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="dashboard-main">
        <div className="dash-welcome">
          <h2>Admin Dashboard 👋</h2>
          <p>Project 48: Travel Blog System Management</p>
        </div>

        {/* 4 ACTION CARDS (Grid layout) */}
        <div className="dash-actions">
          <a href="#" className="action-card">
            <h4>View Details</h4>
            <p>Browse all destinations</p>
          </a>
          <a href="#" className="action-card">
            <h4>Insert Record</h4>
            <p>Add new travel post</p>
          </a>
          <a href="#" className="action-card">
            <h4>Update Record</h4>
            <p>Modify existing data</p>
          </a>
          <a href="#" className="action-card">
            <h4>Delete Record</h4>
            <p>Remove travel records</p>
          </a>
        </div>

        {/* GRAPHICAL SECTION (Bar Chart) */}
        <div className="chart-section">
          <div className="chart-card">
            <h3>📊 Monthly Traffic</h3>
            <div className="bar-chart">
              {/* These classes (bar-apr, etc.) match the heights in your index.css */}
              <div className="bar bar-apr"></div>
              <div className="bar bar-may"></div>
              <div className="bar bar-jun"></div>
            </div>
          </div>
        </div>

        {/* DATABASE TABLE */}
        <div className="table-container">
          <h3>📋 Recent Database Records</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Destination</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>048-A</td>
                <td>Hunza Valley</td>
                {/* Two classes used for the badge */}
                <td><span className="badge active">Active</span></td>
              </tr>
              <tr>
                <td>048-B</td>
                <td>Skardu Resort</td>
                <td><span className="badge active">Active</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}