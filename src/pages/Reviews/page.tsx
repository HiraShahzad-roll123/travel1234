import { Link } from "react-router-dom";

export default function Reviews() {
  const reviews = [
    { id: 1, name: "Sarah Jenkins", role: "Adventure Traveler", text: "WanderLog made my trip to Hunza Valley absolutely seamless. The guides were extremely knowledgeable and the booking process was flawless.", rating: 5 },
    { id: 2, name: "Michael Chen", role: "Photographer", text: "The destinations curated by WanderLog are perfect for photography. I captured some of the most stunning landscapes in Skardu. Highly recommend their services!", rating: 5 },
    { id: 3, name: "Aisha Khan", role: "Family Vacationer", text: "We took our kids to Swat Valley using WanderLog's family package. The itinerary was perfectly balanced for kids and adults alike.", rating: 4 },
    { id: 4, name: "David Miller", role: "Solo Backpacker", text: "Great prices and amazing community. The blog stories helped me plan my solo trip effectively. Would give 5 stars if there were more budget options.", rating: 4 },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto py-12 px-8 min-h-[calc(100vh-130px)]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary mb-4">Traveler Reviews 🌟</h2>
        <p className="text-[var(--muted-color)] text-lg max-w-[600px] mx-auto">Don't just take our word for it. Read what our community of passionate travelers has to say about their WanderLog experiences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-[var(--card-bg)] rounded-[10px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] p-8 border border-[var(--border-color)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(102,126,234,0.22)] hover:border-primary">
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-xl ${i < review.rating ? 'text-warning' : 'text-gray-300'}`}>★</span>
              ))}
            </div>
            <p className="text-[var(--text-color)] italic mb-6 leading-relaxed">"{review.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                {review.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-color)]">{review.name}</h4>
                <p className="text-[var(--muted-color)] text-sm">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-gradient-to-br from-primary to-secondary rounded-[10px] py-12 px-8 text-white shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Had a great experience?</h3>
        <p className="mb-6 opacity-90 max-w-[500px] mx-auto">Share your travel story with the WanderLog community and help others plan their perfect trip.</p>
        <button className="bg-white text-primary font-bold py-3 px-8 rounded-md transition-all duration-300 hover:bg-gray-100 shadow-md">
          Write a Review
        </button>
      </div>
    </div>
  );
}
