import { Link } from "react-router-dom";

export default function About() {
  const team = [
    { id: 1, name: "Elena Rodriguez", role: "Founder & CEO", image: "👩‍💼", bio: "Former travel journalist who turned her passion for hidden gems into WanderLog." },
    { id: 2, name: "Marcus Johnson", role: "Head of Operations", image: "👨‍💻", bio: "Ensures every tour package meets our strict quality and safety standards." },
    { id: 3, name: "Sophie Chen", role: "Lead Travel Guide", image: "🧗‍♀️", bio: "Certified mountaineer and expert in Northern Pakistan expeditions." },
    { id: 4, name: "Omar Farooq", role: "Community Manager", image: "👨‍✈️", bio: "Connects our travelers and curates the best stories for our blog." },
  ];

  return (
    <div className="w-full min-h-[calc(100vh-130px)] bg-[var(--bg-color)]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-secondary py-20 px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About WanderLog</h1>
        <p className="text-lg md:text-xl max-w-[800px] mx-auto opacity-90 leading-relaxed">
          We believe that travel is more than just visiting places; it's about experiencing the world, understanding diverse cultures, and creating memories that last a lifetime.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto py-16 px-8">
        {/* Mission Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-secondary mb-6">Our Mission</h2>
            <p className="text-[var(--text-color)] text-lg leading-relaxed mb-4">
              Founded in 2024, WanderLog started with a simple idea: make authentic travel experiences accessible to everyone. We cut through the noise of generic tourist traps to bring you genuine adventures.
            </p>
            <p className="text-[var(--text-color)] text-lg leading-relaxed">
              Whether you're looking for a luxury resort getaway or a rugged mountain expedition, our curated packages and passionate community are here to guide you every step of the way.
            </p>
          </div>
          <div className="flex-1 w-full h-64 bg-[var(--card-bg)] rounded-[10px] shadow-lg border border-[var(--border-color)] flex items-center justify-center text-6xl">
            🌍✈️🏔️
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Meet Our Team</h2>
          <p className="text-[var(--muted-color)] text-lg max-w-[600px] mx-auto">The passionate individuals working behind the scenes to make your travel dreams a reality.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.id} className="bg-[var(--card-bg)] rounded-[10px] shadow-[0_4px_20px_rgba(102,126,234,0.12)] p-8 text-center border border-[var(--border-color)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(102,126,234,0.22)] hover:border-primary">
              <div className="w-24 h-24 mx-auto bg-light-bg dark:bg-gray-800 rounded-full flex items-center justify-center text-5xl mb-6 shadow-inner">
                {member.image}
              </div>
              <h3 className="text-xl font-bold text-[var(--text-color)] mb-1">{member.name}</h3>
              <p className="text-primary font-semibold text-sm mb-4">{member.role}</p>
              <p className="text-[var(--muted-color)] text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
