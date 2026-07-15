import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Compass, Route, Clock, MessageSquare } from "lucide-react";
import { routes } from "../../data/routes";

export default function PopularRoutes() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showMore, setShowMore] = useState(false);

  const filteredRoutes = routes.filter((route) => {
    if (activeCategory === "heritage") {
      return route.category === "Sightseeing" || route.category === "Pilgrimage";
    }
    if (activeCategory === "outstation") {
      return route.category === "Outstation";
    }
    return true;
  });

  // Limit displaying to 8 items initially unless showMore is true
  const displayedRoutes = showMore ? filteredRoutes : filteredRoutes.slice(0, 8);

  const getWhatsAppLink = (routeName) => {
    const text = `Hello Kartik Tours & Travels, I want to book a taxi from Aurangabad to *${routeName}*. Please share a custom price quote.`;
    return `https://wa.me/919049998498?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="routes" className="bg-[#F8FAFC] py-24 md:py-32 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-accent text-xs font-bold uppercase tracking-[0.2em]">
            Popular Journeys
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mt-3 mb-6">
            Trending Travel Routes
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6 rounded-full" />
          <p className="text-slate-600 text-sm md:text-base font-sans">
            We provide seamless round-trip and one-way transfers to historical landmarks and major commercial cities. Book your preferred vehicle class today.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center space-x-3 mb-12">
          <button
            onClick={() => { setActiveCategory("all"); setShowMore(false); }}
            className={`font-accent text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Destinations
          </button>
          <button
            onClick={() => { setActiveCategory("heritage"); setShowMore(false); }}
            className={`font-accent text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 ${
              activeCategory === "heritage"
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Heritage & Pilgrimage
          </button>
          <button
            onClick={() => { setActiveCategory("outstation"); setShowMore(false); }}
            className={`font-accent text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 ${
              activeCategory === "outstation"
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Intercity Outstation
          </button>
        </div>

        {/* Routes Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedRoutes.map((route, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={route.name}
                className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:border-gold/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Indicator */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-accent font-bold text-gold bg-gold/10 border border-gold/10 px-2.5 py-0.5 rounded">
                      {route.category}
                    </span>
                    <MapPin size={14} className="text-slate-300" />
                  </div>

                  {/* Route Title */}
                  <h3 className="font-serif text-lg font-bold text-primary mb-6">
                    {route.name}
                  </h3>

                  {/* Route Specs */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-slate-500 text-xs font-sans">
                      <Route size={14} className="text-gold mr-2" />
                      <span>Distance: <strong>{route.distance}</strong></span>
                    </div>
                    <div className="flex items-center text-slate-500 text-xs font-sans">
                      <Clock size={14} className="text-gold mr-2" />
                      <span>Est. Duration: <strong>{route.time}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <a
                  href={getWhatsAppLink(route.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-slate-50 hover:bg-gold-gradient hover:text-primary text-slate-700 font-accent text-xs font-bold py-2.5 rounded-lg border border-slate-200 hover:border-gold transition-all duration-300"
                >
                  <MessageSquare size={13} />
                  <span>Get Quote</span>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredRoutes.length > 8 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-primary hover:bg-slate-800 text-white font-accent text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {showMore ? "Show Less" : "Show All Routes"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
