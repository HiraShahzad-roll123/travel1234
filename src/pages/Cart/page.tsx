import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="w-full max-w-[1000px] mx-auto py-12 px-8 min-h-[calc(100vh-130px)]">
      <h2 className="text-3xl font-bold text-secondary mb-2">Your Cart 🛒</h2>
      <p className="text-[var(--muted-color)] mb-8">Review your selected travel packages before checkout.</p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-[var(--card-bg)] rounded-[10px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] p-6 flex flex-col sm:flex-row items-center gap-6 border border-[var(--border-color)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(102,126,234,0.18)]">
            <img src="/images/image4.png" alt="Hunza Valley" className="w-32 h-32 object-cover rounded-md" />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-[var(--text-color)] mb-1">Hunza Valley Expedition</h3>
              <p className="text-[var(--muted-color)] text-sm mb-3">5 Days, 4 Nights | Includes Guide & Stay</p>
              <div className="flex items-center justify-center sm:justify-start gap-4">
                <select className="bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] rounded-md px-3 py-1 outline-none focus:border-primary">
                  <option>1 Person</option>
                  <option>2 Persons</option>
                  <option>3 Persons</option>
                </select>
                <button className="text-danger text-sm font-semibold hover:underline">Remove</button>
              </div>
            </div>
            <div className="text-2xl font-bold text-primary mt-4 sm:mt-0">$450</div>
          </div>

          <div className="bg-[var(--card-bg)] rounded-[10px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] p-6 flex flex-col sm:flex-row items-center gap-6 border border-[var(--border-color)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(102,126,234,0.18)]">
            <img src="/images/image5.png" alt="Skardu Resort" className="w-32 h-32 object-cover rounded-md" />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-[var(--text-color)] mb-1">Skardu Resort Getaway</h3>
              <p className="text-[var(--muted-color)] text-sm mb-3">3 Days, 2 Nights | Luxury Resort</p>
              <div className="flex items-center justify-center sm:justify-start gap-4">
                <select className="bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] rounded-md px-3 py-1 outline-none focus:border-primary">
                  <option>2 Persons</option>
                  <option>3 Persons</option>
                  <option>4 Persons</option>
                </select>
                <button className="text-danger text-sm font-semibold hover:underline">Remove</button>
              </div>
            </div>
            <div className="text-2xl font-bold text-primary mt-4 sm:mt-0">$600</div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-80 h-fit bg-[var(--card-bg)] rounded-[10px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] p-8 border border-[var(--border-color)]">
          <h3 className="text-xl font-bold text-[var(--text-color)] mb-6">Order Summary</h3>
          <div className="flex justify-between mb-4 text-[var(--muted-color)]">
            <span>Subtotal</span>
            <span className="font-semibold text-[var(--text-color)]">$1,050</span>
          </div>
          <div className="flex justify-between mb-4 text-[var(--muted-color)]">
            <span>Tax (10%)</span>
            <span className="font-semibold text-[var(--text-color)]">$105</span>
          </div>
          <div className="flex justify-between mb-6 text-[var(--muted-color)]">
            <span>Discount</span>
            <span className="font-semibold text-success">-$50</span>
          </div>
          <hr className="border-[var(--border-color)] mb-6" />
          <div className="flex justify-between mb-8">
            <span className="text-lg font-bold text-[var(--text-color)]">Total</span>
            <span className="text-2xl font-bold text-primary">$1,105</span>
          </div>
          <button className="w-full bg-gradient-to-br from-primary to-secondary text-white font-bold py-3 px-6 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            Proceed to Checkout
          </button>
          <p className="text-center text-xs text-[var(--muted-color)] mt-4">Secure checkout powered by Stripe</p>
        </div>
      </div>
    </div>
  );
}
