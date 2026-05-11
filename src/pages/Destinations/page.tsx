import { Link } from 'react-router-dom';

export default function Destinations() {
  return (
    <main className="container">
      {/* Hero Section */}
      <div className="dest-hero">
        <h2>🌄 Explore Top Destinations</h2>
        <p>Discover breathtaking places across Pakistan.</p>
      </div>

      {/* Search Bar Row */}
      <div className="search-bar-row">
        <div className="form-group">
          <label className="form-label">Search Name</label>
          <input type="text" className="form-input" placeholder="e.g. Hunza" />
        </div>
        <div className="form-group">
          <label className="form-label">Category</label>
          <select className="form-select">
            <option value="">All Categories</option>
            <option value="north">North</option>
            <option value="mountain">Mountain</option>
            <option value="valley">Valley</option>
          </select>
        </div>
        <button className="btn btn-primary">Search</button>
      </div>

      {/* Data Table */}
      <div className="table-container">
        <h3>📋 Destination Directory</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price (est)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Hunza Valley</td>
              <td>North</td>
              <td>PKR 45,000</td>
              <td><span className="badge active">Available</span></td>
            </tr>
            <tr>
              <td>002</td>
              <td>Skardu Valley</td>
              <td>Mountain</td>
              <td>PKR 55,000</td>
              <td><span className="badge active">Available</span></td>
            </tr>
            <tr>
              <td>003</td>
              <td>Swat Valley</td>
              <td>Valley</td>
              <td>PKR 30,000</td>
              <td><span className="badge active">Available</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Highlights Grid */}
      <div className="section-heading mt-3">
        <h2>Featured Highlights</h2>
      </div>

      <section className="card-grid">
        <article className="card-item">
          <img src="/images/image4.png" alt="Hunza" className="card-image-styled" />
          <div className="card-body">
            <span className="category-tag">NORTH</span>
            <h3>Hunza Valley</h3>
            <p>Spectacular mountain views and heritage.</p>
            <Link to="#" className="btn btn-primary">View Details</Link>
          </div>
        </article>

        <article className="card-item">
          <img src="/images/image5.png" alt="Skardu" className="card-image-styled" />
          <div className="card-body">
            <span className="category-tag">MOUNTAIN</span>
            <h3>Skardu Valley</h3>
            <p>Paradise for mountaineers and trekkers.</p>
            <Link to="#" className="btn btn-primary">View Details</Link>
          </div>
        </article>
      </section>
    </main>
  );
}