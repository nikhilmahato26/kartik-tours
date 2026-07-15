import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Car, CheckCircle2 } from "lucide-react";
import BookingForm from "../BookingForm/BookingForm";

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between bg-primary pt-28 pb-16 md:pb-24 overflow-hidden">
      {/* Background Image with Dark Blue Radial/Linear Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-105"
        style={{ backgroundImage: "url('/hero_bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#090D1A]/90 via-[#0F172A]/75 to-[#0F172A]" />
      </div>

      {/* Hero Content Grid */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-10 z-10 flex-grow flex flex-col justify-center items-center text-center mt-6 lg:mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Small Top Badge */}
          <span className="inline-block bg-gold/10 border border-gold/30 text-gold text-xs font-accent font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6">
            Chauffeur-Driven Luxury Car Rentals
          </span>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Premium Car Rental <br />
            <span className="text-gold-gradient">Service in Aurangabad</span>
          </h1>

          {/* Subheading */}
          <p className="font-accent text-sm md:text-lg text-slate-300 font-medium tracking-wide mb-8">
            Luxury <span className="text-gold mx-2">•</span> Comfort <span className="text-gold mx-2">•</span> Safe Journeys <span className="text-gold mx-2">•</span> Affordable Pricing
          </p>

          {/* Quick Value Props (Matches uploaded Carento reference style) */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-10 text-slate-300 text-xs md:text-sm font-sans">
            <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <CheckCircle2 size={16} className="text-gold" />
              <span>Verified Professional Drivers</span>
            </span>
            <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <CheckCircle2 size={16} className="text-gold" />
              <span>100% Sanitized Fleet</span>
            </span>
            <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <CheckCircle2 size={16} className="text-gold" />
              <span>24/7 Roadside Assistance</span>
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gold-gradient text-primary border border-gold font-accent text-xs md:text-sm font-bold tracking-wider uppercase px-8 py-3.5 rounded-lg hover:shadow-xl hover:shadow-gold/20 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            >
              Book Now
            </button>
            <a
              href="tel:+919049998498"
              className="flex items-center space-x-2 bg-white/5 border border-white/15 text-white font-accent text-xs md:text-sm font-bold tracking-wider uppercase px-8 py-3.5 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              <Phone size={14} className="text-gold" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919049998498?text=Hello%20Kartik%20Tours%20and%20Travels,%20I'm%20interested%20in%20booking%20a%20luxury%20cab%20in%20Aurangabad."
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 bg-green-600/90 border border-green-500/30 text-white font-accent text-xs md:text-sm font-bold tracking-wider uppercase px-8 py-3.5 rounded-lg hover:bg-green-700 hover:shadow-lg transition-all duration-300"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => scrollToSection("fleet")}
              className="flex items-center space-x-2 text-gold font-accent text-xs md:text-sm font-bold tracking-wider uppercase px-6 py-3.5 rounded-lg hover:text-white transition-all duration-300 cursor-pointer"
            >
              <Car size={14} />
              <span>View Fleet</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Booking Form Widget (Overlaps the section transition) */}
      <div className="w-full px-4 md:px-10 z-20 -mb-28 lg:-mb-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <BookingForm />
        </motion.div>
      </div>
    </section>
  );
}
