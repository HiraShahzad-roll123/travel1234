export default function Services() {
  return (
    <main className="w-full max-w-[1200px] mx-auto py-12 px-8">
      <div className="bg-gradient-to-br from-primary to-secondary text-white py-14 px-10 text-center rounded-[10px] mb-12">
        <h2 className="text-[1.8rem] mb-3 font-bold">🌟 WanderLog Features</h2>
        <p className="opacity-88 text-base">Tools designed for the modern explorer.</p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center my-10">
        <div className="bg-white rounded-[10px] py-10 px-8 min-w-[220px] flex-1 max-w-[300px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] text-center border-2 border-border-color transition-all duration-300 hover:border-primary hover:-translate-y-1">
          <h3 className="text-secondary mb-4 text-[1.2rem] font-semibold">Basic</h3>
          <div className="text-[1.8rem] font-bold text-primary mb-6">Free</div>
          <ul className="pricing-list list-none mb-8 text-left">
            <li className="py-2 text-text-muted text-[0.9rem] border-b border-border-color">Public Stories</li>
            <li className="py-2 text-text-muted text-[0.9rem] border-b border-border-color">Basic Maps</li>
          </ul>
          <button className="bg-transparent border-2 border-white text-white cursor-pointer rounded-md transition-all duration-300 no-underline inline-block font-semibold text-center py-3.5 px-8 text-lg hover:bg-white hover:text-primary">Get Started</button>
        </div>

        <div className="bg-gradient-to-br from-[rgba(102,126,234,0.06)] to-[rgba(118,75,162,0.06)] rounded-[10px] py-10 px-8 min-w-[220px] flex-1 max-w-[300px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] text-center border-2 border-primary transition-all duration-300 hover:border-primary hover:-translate-y-1">
          <h3 className="text-secondary mb-4 text-[1.2rem] font-semibold">Explorer</h3>
          <div className="text-[1.8rem] font-bold text-primary mb-6">PKR 999</div>
          <ul className="pricing-list list-none mb-8 text-left">
            <li className="py-2 text-text-muted text-[0.9rem] border-b border-border-color">Priority Booking</li>
            <li className="py-2 text-text-muted text-[0.9rem] border-b border-border-color">Offline Guides</li>
          </ul>
          <button className="cursor-pointer border-none rounded-md transition-all duration-300 no-underline inline-block font-semibold text-center py-3 px-8 text-[0.95rem] bg-gradient-to-br from-primary to-secondary text-white hover:opacity-88 hover:-translate-y-px">Subscribe</button>
        </div>
      </div>
    </main>
  );
}