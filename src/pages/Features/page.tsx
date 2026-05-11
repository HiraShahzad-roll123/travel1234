export default function Services() {
  return (
    <main className="container">
      <div className="features-hero">
        <h2>🌟 WanderLog Features</h2>
        <p>Tools designed for the modern explorer.</p>
      </div>

      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Basic</h3>
          <div className="pricing-price">Free</div>
          <ul className="pricing-list">
            <li>Public Stories</li>
            <li>Basic Maps</li>
          </ul>
          <button className="btn btn-outline">Get Started</button>
        </div>

        <div className="pricing-card card-highlight">
          <h3>Explorer</h3>
          <div className="pricing-price">PKR 999</div>
          <ul className="pricing-list">
            <li>Priority Booking</li>
            <li>Offline Guides</li>
          </ul>
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </main>
  );
}