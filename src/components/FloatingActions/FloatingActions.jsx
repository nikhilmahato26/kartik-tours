import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button (Glowing Green) */}
      <a
        href="https://wa.me/919049998498?text=Hello%20Kartik%20Tours%20and%2520Travels,%20I%20want%20to%20book%20a%20cab%20service."
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-xl shadow-green-900/30 hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        title="WhatsApp Chat"
      >
        {/* Pulsing glow ring */}
        <span className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-25 pointer-events-none" />
        <MessageCircle size={26} />
        {/* Tooltip tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#090D1A] border border-gold/25 text-white font-accent text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl pointer-events-none">
          Book on WhatsApp
        </span>
      </a>

      {/* Call Now Button (Glowing Gold/Navy) */}
      <a
        href="tel:+919049998498"
        className="w-14 h-14 bg-[#0F172A] hover:bg-[#1E293B] text-gold rounded-full flex items-center justify-center border border-gold/30 shadow-xl shadow-slate-900/40 hover:scale-110 active:scale-95 transition-all duration-300 group"
        title="Call Helpline"
      >
        <Phone size={22} />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#090D1A] border border-gold/25 text-white font-accent text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl pointer-events-none">
          Call +91 9049998498
        </span>
      </a>

      {/* Back To Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-14 h-14 bg-gold text-primary rounded-full flex items-center justify-center shadow-xl shadow-gold/20 hover:bg-gold-hover hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
          title="Back to Top"
        >
          <ArrowUp size={22} />
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#090D1A] border border-gold/25 text-white font-accent text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl pointer-events-none">
            Back to Top
          </span>
        </button>
      )}
    </div>
  );
}
