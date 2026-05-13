import { Link } from 'react-router-dom';

export default function Destinations() {
  return (
    <main className="w-full max-w-[1200px] mx-auto py-12 px-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-secondary text-white py-14 px-10 text-center rounded-[10px] mb-10">
        <h2 className="text-[1.8rem] mb-3 font-bold">🌄 Explore Top Destinations</h2>
        <p className="opacity-88 text-base">Discover breathtaking places across Pakistan.</p>
      </div>

      {/* Search Bar Row */}
      <div className="flex flex-wrap gap-5 bg-white py-6 px-8 rounded-[10px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] mb-10 items-end">
        <div className="flex-1 min-w-[150px]">
          <label className="block font-semibold mb-1.5 text-text-main text-sm">Search Name</label>
          <input type="text" className="w-full py-2.5 px-3.5 border-[1.5px] border-border-color rounded-md text-[0.95rem] transition-all duration-300 bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(102,126,234,0.15)]" placeholder="e.g. Hunza" />
        </div>
        <div className="flex-1 min-w-[150px]">
          <label className="block font-semibold mb-1.5 text-text-main text-sm">Category</label>
          <select className="w-full py-2.5 px-3.5 border-[1.5px] border-border-color rounded-md text-[0.95rem] transition-all duration-300 bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(102,126,234,0.15)]">
            <option value="">All Categories</option>
            <option value="north">North</option>
            <option value="mountain">Mountain</option>
            <option value="valley">Valley</option>
          </select>
        </div>
        <button className="cursor-pointer border-none rounded-md transition-all duration-300 no-underline inline-block font-semibold text-center py-2.5 px-6 text-[0.95rem] bg-gradient-to-br from-primary to-secondary text-white hover:opacity-88 hover:-translate-y-px">Search</button>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-[10px] p-8 shadow-[0_4px_20px_rgba(102,126,234,0.12)] mb-12">
        <h3 className="text-lg mb-5 text-text-main font-semibold">📋 Destination Directory</h3>
        <table className="data-table w-full border-collapse bg-white rounded-[10px] overflow-hidden shadow-[0_4px_20px_rgba(102,126,234,0.12)]">
          <thead>
            <tr>
              <th className="bg-gradient-to-br from-primary to-secondary text-white py-4 px-5 text-left text-[0.9rem]">ID</th>
              <th className="bg-gradient-to-br from-primary to-secondary text-white py-4 px-5 text-left text-[0.9rem]">Name</th>
              <th className="bg-gradient-to-br from-primary to-secondary text-white py-4 px-5 text-left text-[0.9rem]">Category</th>
              <th className="bg-gradient-to-br from-primary to-secondary text-white py-4 px-5 text-left text-[0.9rem]">Price (est)</th>
              <th className="bg-gradient-to-br from-primary to-secondary text-white py-4 px-5 text-left text-[0.9rem]">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 px-5 border-b border-border-color text-[0.92rem]">001</td>
              <td className="py-4 px-5 border-b border-border-color text-[0.92rem]">Hunza Valley</td>
              <td className="py-4 px-5 border-b border-border-color text-[0.92rem]">North</td>
              <td className="py-4 px-5 border-b border-border-color text-[0.92rem]">PKR 45,000</td>
              <td className="py-4 px-5 border-b border-border-color text-[0.92rem]"><span className="py-1 px-3 rounded-full text-[0.78rem] font-semibold inline-block bg-[#d1fae5] text-[#065f46]">Available</span></td>
            </tr>
            <tr>
              <td className="py-4 px-5 border-b border-border-color text-[0.92rem]">002</td>
              <td className="py-4 px-5 border-b border-border-color text-[0.92rem]">Skardu Valley</td>
              <td className="py-4 px-5 border-b border-border-color text-[0.92rem]">Mountain</td>
              <td className="py-4 px-5 border-b border-border-color text-[0.92rem]">PKR 55,000</td>
              <td className="py-4 px-5 border-b border-border-color text-[0.92rem]"><span className="py-1 px-3 rounded-full text-[0.78rem] font-semibold inline-block bg-[#d1fae5] text-[#065f46]">Available</span></td>
            </tr>
            <tr>
              <td className="py-4 px-5 border-b border-border-color text-[0.92rem]">003</td>
              <td className="py-4 px-5 border-b border-border-color text-[0.92rem]">Swat Valley</td>
              <td className="py-4 px-5 border-b border-border-color text-[0.92rem]">Valley</td>
              <td className="py-4 px-5 border-b border-border-color text-[0.92rem]">PKR 30,000</td>
              <td className="py-4 px-5 border-b border-border-color text-[0.92rem]"><span className="py-1 px-3 rounded-full text-[0.78rem] font-semibold inline-block bg-[#d1fae5] text-[#065f46]">Available</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Highlights Grid */}
      <div className="text-center mt-14 mb-8">
        <h2 className="text-[1.8rem] text-secondary mb-2 font-bold">Featured Highlights</h2>
      </div>

      <section className="flex justify-center flex-wrap gap-10 mt-8 mb-8">
        <article className="bg-white rounded-[10px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] w-80 overflow-hidden transition-all duration-300 border-2 border-transparent hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(102,126,234,0.22)] hover:border-primary">
          <img src="/images/image4.png" alt="Hunza" className="w-full h-[200px] object-cover block bg-gradient-to-br from-primary to-secondary" />
          <div className="p-6">
            <span className="bg-gradient-to-br from-primary to-secondary text-white py-[3px] px-2.5 rounded-full text-[0.72rem] font-bold tracking-wide inline-block mb-3">NORTH</span>
            <h3 className="text-[1.15rem] mb-2 text-text-main font-semibold">Hunza Valley</h3>
            <p className="text-text-muted text-[0.9rem] mb-5">Spectacular mountain views and heritage.</p>
            <Link to="#" className="cursor-pointer border-none rounded-md transition-all duration-300 no-underline inline-block font-semibold text-center py-2.5 px-6 text-[0.95rem] bg-gradient-to-br from-primary to-secondary text-white hover:opacity-88 hover:-translate-y-px">View Details</Link>
          </div>
        </article>

        <article className="bg-white rounded-[10px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] w-80 overflow-hidden transition-all duration-300 border-2 border-transparent hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(102,126,234,0.22)] hover:border-primary">
          <img src="/images/image5.png" alt="Skardu" className="w-full h-[200px] object-cover block bg-gradient-to-br from-primary to-secondary" />
          <div className="p-6">
            <span className="bg-gradient-to-br from-primary to-secondary text-white py-[3px] px-2.5 rounded-full text-[0.72rem] font-bold tracking-wide inline-block mb-3">MOUNTAIN</span>
            <h3 className="text-[1.15rem] mb-2 text-text-main font-semibold">Skardu Valley</h3>
            <p className="text-text-muted text-[0.9rem] mb-5">Paradise for mountaineers and trekkers.</p>
            <Link to="#" className="cursor-pointer border-none rounded-md transition-all duration-300 no-underline inline-block font-semibold text-center py-2.5 px-6 text-[0.95rem] bg-gradient-to-br from-primary to-secondary text-white hover:opacity-88 hover:-translate-y-px">View Details</Link>
          </div>
        </article>
      </section>
    </main>
  );
}