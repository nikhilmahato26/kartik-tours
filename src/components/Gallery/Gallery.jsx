import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  const col1 = [
    {
      image: "/gallery_airport.png",
      title: "Airport Transfers",
      category: "VIP Transport"
    },
    {
      image: "/hyundai_aura.png",
      title: "Hyundai Aura Sedan",
      category: "Executive Ride"
    }
  ];

  const col2 = [
    {
      image: "/gallery_wedding.png",
      title: "Wedding Decorations",
      category: "Special Events"
    },
    {
      image: "/gallery_interiors.png",
      title: "Luxury Cabin Interiors",
      category: "Sanitized Space"
    },
    {
      image: "/swift_dzire.png",
      title: "Maruti Swift Dzire",
      category: "Corporate Fleet"
    }
  ];

  const col3 = [
    {
      image: "/innova_crysta.png",
      title: "Toyota Innova Crysta",
      category: "Premium SUV"
    },
    {
      image: "/maruti_ertiga.png",
      title: "Maruti Ertiga MPV",
      category: "Family Tours"
    },
    {
      image: "/hero_bg.png",
      title: "Outstation Journeys",
      category: "Road Trips"
    }
  ];

  const renderCard = (item, idx) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      key={item.title}
      className="relative rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl hover:border-gold/30 border border-slate-800/20 transition-all duration-500 cursor-pointer"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full object-cover h-auto max-h-[420px] group-hover:scale-105 transition-transform duration-700"
      />
      {/* Dark overlay showing text on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-[#0F172A]/50 to-transparent opacity-70 sm:opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-gold font-accent text-[10px] font-bold uppercase tracking-wider mb-1 block">
          {item.category}
        </span>
        <h4 className="font-serif text-lg font-bold text-white">
          {item.title}
        </h4>
      </div>
    </motion.div>
  );

  return (
    <section id="gallery" className="bg-[#090D1A] py-24 md:py-32 px-4 md:px-10 border-b border-gold/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-gold font-accent text-xs font-bold uppercase tracking-[0.2em]">
            Service Gallery
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Luxury Moments in Motion
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6 rounded-full" />
          <p className="text-slate-400 text-sm md:text-base font-sans">
            A snapshot of our verified drivers, sanitized premium vehicles, luxury weddings, and airport guest transport services.
          </p>
        </div>

        {/* Masonry Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-6 flex flex-col justify-start">
            {col1.map((item, idx) => renderCard(item, idx))}
          </div>
          <div className="space-y-6 flex flex-col justify-start">
            {col2.map((item, idx) => renderCard(item, idx))}
          </div>
          <div className="space-y-6 flex flex-col justify-start">
            {col3.map((item, idx) => renderCard(item, idx))}
          </div>
        </div>

      </div>
    </section>
  );
}
