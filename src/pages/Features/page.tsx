export default function Services() {
  return (
    <main className="w-full max-w-[1200px] mx-auto py-12 px-8 min-h-[calc(100vh-130px)]">
      <div className="bg-gradient-to-br from-primary via-[#8b5cf6] to-secondary text-white py-16 px-10 text-center rounded-2xl mb-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <h2 className="text-4xl mb-4 font-extrabold tracking-tight relative z-10">🌟 WanderLog Features</h2>
        <p className="opacity-90 text-lg max-w-[600px] mx-auto relative z-10 font-medium">Tools designed for the modern explorer. Choose a plan that fits your travel style.</p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center my-10 items-stretch">
        
        {/* Tier 1: Basic */}
        <div className="bg-[var(--card-bg)] rounded-[16px] py-10 px-8 min-w-[280px] flex-1 max-w-[340px] shadow-lg text-center border-2 border-[var(--border-color)] transition-all duration-300 hover:border-primary hover:-translate-y-2 flex flex-col">
          <h3 className="text-[var(--muted-color)] mb-4 text-[1.3rem] font-bold uppercase tracking-wider">Basic</h3>
          <div className="text-[2.5rem] font-extrabold text-[var(--text-color)] mb-2">Free</div>
          <p className="text-[var(--muted-color)] text-sm mb-6 pb-6 border-b border-[var(--border-color)]">Perfect for casual travelers</p>
          <ul className="list-none mb-8 text-left flex-1 flex flex-col gap-3">
            <li className="flex items-center gap-3 text-[var(--text-color)] text-[0.95rem] font-medium"><span className="text-success text-lg">✓</span> Public Stories</li>
            <li className="flex items-center gap-3 text-[var(--text-color)] text-[0.95rem] font-medium"><span className="text-success text-lg">✓</span> Basic Maps</li>
            <li className="flex items-center gap-3 text-[var(--muted-color)] text-[0.95rem] line-through"><span className="text-[var(--muted-color)] text-lg">✗</span> Priority Booking</li>
          </ul>
          <button className="bg-transparent border-2 border-[var(--border-color)] text-[var(--text-color)] rounded-xl transition-all duration-300 font-bold text-center py-3.5 px-8 text-[1rem] hover:bg-primary hover:text-white hover:border-primary w-full mt-auto">Get Started</button>
        </div>

        {/* Tier 2: Explorer (Popular) */}
        <div className="bg-[var(--card-bg)] rounded-[16px] py-10 px-8 min-w-[280px] flex-1 max-w-[340px] shadow-2xl text-center border-2 border-primary transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col scale-105 z-10">
          <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold px-3 py-1.5 uppercase tracking-widest">Most Popular</div>
          <h3 className="text-primary mb-4 mt-4 text-[1.3rem] font-bold uppercase tracking-wider">Explorer</h3>
          <div className="text-[2.5rem] font-extrabold text-[var(--text-color)] mb-2">PKR 999<span className="text-lg text-[var(--muted-color)] font-medium">/mo</span></div>
          <p className="text-[var(--muted-color)] text-sm mb-6 pb-6 border-b border-[var(--border-color)]">For the avid adventurer</p>
          <ul className="list-none mb-8 text-left flex-1 flex flex-col gap-3">
            <li className="flex items-center gap-3 text-[var(--text-color)] text-[0.95rem] font-medium"><span className="text-primary text-lg">✓</span> Priority Booking</li>
            <li className="flex items-center gap-3 text-[var(--text-color)] text-[0.95rem] font-medium"><span className="text-primary text-lg">✓</span> Offline Guides</li>
            <li className="flex items-center gap-3 text-[var(--text-color)] text-[0.95rem] font-medium"><span className="text-primary text-lg">✓</span> Exclusive Deals</li>
          </ul>
          <button className="cursor-pointer border-none rounded-xl transition-all duration-300 inline-block font-bold text-center py-3.5 px-8 text-[1rem] bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 hover:shadow-lg w-full mt-auto">Subscribe Now</button>
        </div>

        {/* Tier 3: Pro */}
        <div className="bg-[var(--card-bg)] rounded-[16px] py-10 px-8 min-w-[280px] flex-1 max-w-[340px] shadow-lg text-center border-2 border-[var(--border-color)] transition-all duration-300 hover:border-secondary hover:-translate-y-2 flex flex-col">
          <h3 className="text-secondary mb-4 text-[1.3rem] font-bold uppercase tracking-wider">Premium</h3>
          <div className="text-[2.5rem] font-extrabold text-[var(--text-color)] mb-2">PKR 2499<span className="text-lg text-[var(--muted-color)] font-medium">/mo</span></div>
          <p className="text-[var(--muted-color)] text-sm mb-6 pb-6 border-b border-[var(--border-color)]">Ultimate travel experience</p>
          <ul className="list-none mb-8 text-left flex-1 flex flex-col gap-3">
            <li className="flex items-center gap-3 text-[var(--text-color)] text-[0.95rem] font-medium"><span className="text-secondary text-lg">✓</span> All Explorer Features</li>
            <li className="flex items-center gap-3 text-[var(--text-color)] text-[0.95rem] font-medium"><span className="text-secondary text-lg">✓</span> Personal Concierge</li>
            <li className="flex items-center gap-3 text-[var(--text-color)] text-[0.95rem] font-medium"><span className="text-secondary text-lg">✓</span> Free Airport Lounge</li>
          </ul>
          <button className="bg-transparent border-2 border-secondary text-secondary rounded-xl transition-all duration-300 font-bold text-center py-3.5 px-8 text-[1rem] hover:bg-secondary hover:text-white w-full mt-auto">Go Premium</button>
        </div>
        
      </div>
    </main>
  );
}