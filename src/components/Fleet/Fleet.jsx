import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Briefcase, Snowflake, Navigation, Phone, MessageCircle } from "lucide-react";
import { fleet } from "../../data/fleet";

export default function Fleet() {
  const [filter, setFilter] = useState("all"); // all, sedan, suv

  const filteredFleet = fleet.filter((car) => {
    if (filter === "sedan") return car.category === "Sedan";
    if (filter === "suv") return car.category === "MPV" || car.category === "Premium SUV";
    return true;
  });

  const getWhatsAppLink = (carName) => {
    const text = `Hello Kartik Tours & Travels, I want to book a *${carName}* for my trip. Please provide pricing and availability.`;
    return `https://wa.me/919049998498?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="fleet" className="bg-[#F8FAFC] py-24 md:py-32 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-accent text-xs font-bold uppercase tracking-[0.2em]">
            Exclusive Collection
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mt-3 mb-6">
            Most Searched Vehicles
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6 rounded-full" />
          <p className="text-slate-600 text-sm md:text-base font-sans">
            Explore our curated fleet of luxury chauffeur-driven vehicles. Kept in pristine condition, fully sanitized, and ready for your next journey.
          </p>
        </div>

        {/* Filter Navigation (Matches uploaded mockup design) */}
        <div className="flex justify-center space-x-3 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`font-accent text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 ${
              filter === "all"
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Vehicles
          </button>
          <button
            onClick={() => setFilter("sedan")}
            className={`font-accent text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 ${
              filter === "sedan"
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Executive Sedans
          </button>
          <button
            onClick={() => setFilter("suv")}
            className={`font-accent text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 ${
              filter === "suv"
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Premium SUVs / MPVs
          </button>
        </div>

        {/* Fleet Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredFleet.map((car) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={car.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Vehicle Image Container */}
                <div className="relative bg-slate-100 p-4 h-56 flex items-center justify-center overflow-hidden group">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="object-contain h-full w-full max-h-48 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Rating pill */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-slate-200/50 px-3 py-1 rounded-full text-[10px] font-accent font-bold text-slate-700 shadow-sm flex items-center space-x-1">
                    <span>⭐</span>
                    <span>{car.rating}</span>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 bg-gold-gradient text-primary border border-gold/45 px-3 py-1 rounded-full text-[10px] font-accent font-bold uppercase tracking-wider">
                    {car.category}
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl font-bold text-primary">
                        {car.name}
                      </h3>
                    </div>
                    {/* Location tag */}
                    <div className="flex items-center text-slate-400 text-xs font-accent mb-6">
                      <Navigation size={12} className="text-gold mr-1" />
                      <span>Aurangabad, Maharashtra</span>
                    </div>

                    {/* Features Matrix (4 Key Items) */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-slate-600 text-xs font-sans">
                        <Users size={14} className="text-gold mr-2" />
                        <span>{car.passengers} Seats</span>
                      </div>
                      <div className="flex items-center text-slate-600 text-xs font-sans">
                        <Snowflake size={14} className="text-gold mr-2" />
                        <span>Air Conditioning</span>
                      </div>
                      <div className="flex items-center text-slate-600 text-xs font-sans">
                        <Briefcase size={14} className="text-gold mr-2" />
                        <span>{car.luggage}</span>
                      </div>
                      <div className="flex items-center text-slate-600 text-xs font-sans">
                        <Navigation size={14} className="text-gold mr-2" />
                        <span>Chauffeur Driven</span>
                      </div>
                    </div>

                    {/* Ideal For Section */}
                    <div className="mb-6 pt-4 border-t border-slate-100">
                      <h4 className="text-xs font-accent font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Best Suited For:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {car.idealFor.map((item) => (
                          <span 
                            key={item} 
                            className="bg-slate-100 text-slate-600 text-[10px] font-accent font-semibold px-2 py-1 rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing and CTAs */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-accent font-bold text-slate-400 uppercase tracking-wider block">
                        Estimated Fare
                      </span>
                      <span className="text-lg font-serif font-bold text-primary">
                        {car.priceEstimate}
                      </span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <a 
                        href={`tel:+919049998498`}
                        className="p-2.5 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-lg transition"
                        title="Call Now"
                      >
                        <Phone size={14} />
                      </a>
                      <a
                        href={getWhatsAppLink(car.name)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-1.5 bg-primary hover:bg-slate-800 text-white font-accent text-xs font-bold px-4 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300"
                      >
                        <MessageCircle size={13} />
                        <span>Book</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
