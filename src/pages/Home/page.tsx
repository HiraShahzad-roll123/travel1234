import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="w-full max-w-[1200px] mx-auto py-12 px-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-secondary text-white py-16 px-10 rounded-[10px] text-center mb-14">
        <h2 className="text-3xl mb-4 font-bold">🌍 Explore the World with WanderLog</h2>
        <p className="text-lg opacity-90 max-w-[600px] mx-auto mb-8">Your ultimate travel companion for discovering hidden gems and sharing unforgettable experiences.</p>
        <Link to="/destinations" className="bg-transparent border-2 border-white text-white cursor-pointer rounded-md transition-all duration-300 no-underline inline-block font-semibold text-center py-3.5 px-8 text-lg hover:bg-white hover:text-primary">View Destination Details</Link>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap gap-8 justify-center my-12">
        <div className="bg-[var(--card-bg)] rounded-[10px] py-8 px-10 text-center min-w-[180px] flex-1 shadow-[0_4px_20px_rgba(102,126,234,0.12)] border-t-4 border-primary transition-colors duration-300">
          <div className="text-3xl font-bold text-primary block">120+</div>
          <div className="text-[var(--muted-color)] text-sm mt-2">Destinations Listed</div>
        </div>
        <div className="bg-[var(--card-bg)] rounded-[10px] py-8 px-10 text-center min-w-[180px] flex-1 shadow-[0_4px_20px_rgba(102,126,234,0.12)] border-t-4 border-primary transition-colors duration-300">
          <div className="text-3xl font-bold text-primary block">5,400</div>
          <div className="text-[var(--muted-color)] text-sm mt-2">Happy Travelers</div>
        </div>
        <div className="bg-[var(--card-bg)] rounded-[10px] py-8 px-10 text-center min-w-[180px] flex-1 shadow-[0_4px_20px_rgba(102,126,234,0.12)] border-t-4 border-primary transition-colors duration-300">
          <div className="text-3xl font-bold text-primary block">320</div>
          <div className="text-[var(--muted-color)] text-sm mt-2">Blog Posts</div>
        </div>
        <div className="bg-[var(--card-bg)] rounded-[10px] py-8 px-10 text-center min-w-[180px] flex-1 shadow-[0_4px_20px_rgba(102,126,234,0.12)] border-t-4 border-primary transition-colors duration-300">
          <div className="text-3xl font-bold text-primary block">98%</div>
          <div className="text-[var(--muted-color)] text-sm mt-2">Satisfaction Rate</div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="text-center mt-14 mb-8">
        <h2 className="text-[1.8rem] text-secondary mb-2 font-bold">Featured Destinations</h2>
        <p className="text-[var(--muted-color)] text-base">Top picks from our travel experts for this season</p>
      </div>

      <section className="flex justify-center flex-wrap gap-10 mt-8">
        {/* Card 1 */}
        <article className="bg-[var(--card-bg)] rounded-[10px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] w-80 overflow-hidden transition-all duration-300 border-2 border-transparent hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(102,126,234,0.22)] hover:border-primary">
          <img src="/images/image4.png" alt="Hunza Valley" className="w-full h-[200px] object-cover block bg-gradient-to-br from-primary to-secondary" />
          <div className="p-6">
            <span className="bg-gradient-to-br from-primary to-secondary text-white py-[3px] px-2.5 rounded-full text-[0.72rem] font-bold tracking-wide inline-block mb-3">NORTH</span>
            <h3 className="text-[1.15rem] mb-2 text-[var(--text-color)] font-semibold">Explore the North — Hunza</h3>
            <p className="text-[var(--muted-color)] text-[0.9rem] mb-5">Towering peaks and ancient forts. Hunza Valley is Pakistan's crown jewel.</p>
            <Link to="/destinations" className="bg-gradient-to-br from-primary to-secondary text-white cursor-pointer border-none rounded-md transition-all duration-300 no-underline inline-block font-semibold text-center py-[7px] px-4 text-[0.85rem] hover:opacity-90 hover:-translate-y-px">View Details</Link>
          </div>
        </article>

        {/* Card 2 */}
        <article className="bg-[var(--card-bg)] rounded-[10px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] w-80 overflow-hidden transition-all duration-300 border-2 border-transparent hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(102,126,234,0.22)] hover:border-primary">
          <img src="/images/image5.png" alt="Skardu Valley" className="w-full h-[200px] object-cover block bg-gradient-to-br from-primary to-secondary" />
          <div className="p-6">
            <span className="bg-gradient-to-br from-primary to-secondary text-white py-[3px] px-2.5 rounded-full text-[0.72rem] font-bold tracking-wide inline-block mb-3">MOUNTAIN</span>
            <h3 className="text-[1.15rem] mb-2 text-[var(--text-color)] font-semibold">Beauty of Skardu Valley</h3>
            <p className="text-[var(--muted-color)] text-[0.9rem] mb-5">Gateway to K2. Crystal-clear lakes and breathtaking landscapes.</p>
            <Link to="/destinations" className="bg-gradient-to-br from-primary to-secondary text-white cursor-pointer border-none rounded-md transition-all duration-300 no-underline inline-block font-semibold text-center py-[7px] px-4 text-[0.85rem] hover:opacity-90 hover:-translate-y-px">View Details</Link>
          </div>
        </article>

        {/* Card 3 */}
        <article className="bg-[var(--card-bg)] rounded-[10px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] w-80 overflow-hidden transition-all duration-300 border-2 border-transparent hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(102,126,234,0.22)] hover:border-primary">
          <img src="/images/image6.png" alt="Swat Valley" className="w-full h-[200px] object-cover block bg-gradient-to-br from-primary to-secondary" />
          <div className="p-6">
            <span className="bg-gradient-to-br from-primary to-secondary text-white py-[3px] px-2.5 rounded-full text-[0.72rem] font-bold tracking-wide inline-block mb-3">VALLEY</span>
            <h3 className="text-[1.15rem] mb-2 text-[var(--text-color)] font-semibold">Magical Valley of Swat</h3>
            <p className="text-[var(--muted-color)] text-[0.9rem] mb-5">Emerald rivers and lush green meadows. The Switzerland of Pakistan.</p>
            <Link to="/destinations" className="bg-gradient-to-br from-primary to-secondary text-white cursor-pointer border-none rounded-md transition-all duration-300 no-underline inline-block font-semibold text-center py-[7px] px-4 text-[0.85rem] hover:opacity-90 hover:-translate-y-px">View Details</Link>
          </div>
        </article>
      </section>

      {/* Features Grid */}
      <div className="text-center mt-16 mb-8">
        <h2 className="text-[1.8rem] text-secondary mb-2 font-bold">Why Choose WanderLog?</h2>
        <p className="text-[var(--muted-color)] text-base">Everything you need for the perfect travel experience</p>
      </div>

      <section className="flex justify-center flex-wrap gap-10 mt-8 mb-8">
        <div className="bg-[var(--card-bg)] rounded-[10px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] w-80 overflow-hidden transition-all duration-300 border-2 border-transparent hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(102,126,234,0.22)] hover:border-primary">
          <div className="py-10 px-8 text-center">
            <span className="text-[2.8rem] mb-4 block">🗺️</span>
            <h3 className="text-secondary mb-3 text-[1.15rem] font-semibold">Expert Guides</h3>
            <p className="text-[var(--muted-color)] text-[0.92rem]">Our certified guides ensure you never miss a hidden gem on your journey.</p>
          </div>
        </div>
        <div className="bg-[var(--card-bg)] rounded-[10px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] w-80 overflow-hidden transition-all duration-300 border-2 border-transparent hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(102,126,234,0.22)] hover:border-primary">
          <div className="py-10 px-8 text-center">
            <span className="text-[2.8rem] mb-4 block">📸</span>
            <h3 className="text-secondary mb-3 text-[1.15rem] font-semibold">Blog and Stories</h3>
            <p className="text-[var(--muted-color)] text-[0.92rem]">Read and share real travel stories and photography from our community.</p>
          </div>
        </div>
        <div className="bg-[var(--card-bg)] rounded-[10px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] w-80 overflow-hidden transition-all duration-300 border-2 border-transparent hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(102,126,234,0.22)] hover:border-primary">
          <div className="py-10 px-8 text-center">
            <span className="text-[2.8rem] mb-4 block">🏷️</span>
            <h3 className="text-secondary mb-3 text-[1.15rem] font-semibold">Best Prices</h3>
            <p className="text-[var(--muted-color)] text-[0.92rem]">We compare packages to bring you the most affordable travel options.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
