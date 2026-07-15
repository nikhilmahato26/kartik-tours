import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Our Fleet", href: "#fleet" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Popular Routes", href: "#routes" },
    { name: "Process", href: "#process" },
    { name: "Reviews", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Bar - Hidden on small mobile screens for clean view */}
      <div className="bg-[#090D1A] text-slate-400 text-xs py-2 px-4 md:px-10 border-b border-gold/10 hidden sm:flex justify-between items-center font-accent">
        <div className="flex items-center space-x-6">
          <a href="tel:+919049998498" className="flex items-center space-x-2 hover:text-gold transition">
            <Phone size={13} className="text-gold" />
            <span>+91 9049998498</span>
          </a>
          <a href="mailto:ganeshnarwade161@gmail.com" className="flex items-center space-x-2 hover:text-gold transition">
            <Mail size={13} className="text-gold" />
            <span>ganeshnarwade161@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center space-x-2 flex-wrap">
          <MapPin size={13} className="text-gold mr-1" />
          <span>CIDCO, Chhatrapati Sambhaji Nagar (Aurangabad)</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full py-4 px-4 md:px-10 transition-all duration-300 ${
        isScrolled 
          ? "bg-primary shadow-lg shadow-primary/20 py-3 border-b border-gold/10" 
          : "bg-primary/70 backdrop-blur-md border-b border-white/5"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-white">
              KARTIK
            </span>
            <span className="font-accent text-[9px] tracking-[0.25em] text-gold uppercase -mt-1 font-semibold">
              Tours & Travels
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-accent text-xs font-semibold text-slate-300 hover:text-gold tracking-wide transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Direct CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/919049998498?text=Hello%20Kartik%20Tours%20and%20Travels,%20I%20want%20to%20inquire%20about%20booking%20a%20ride."
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 bg-green-600 text-white font-accent text-xs font-bold px-4 py-2 rounded-full border border-green-500 hover:bg-green-700 hover:shadow-lg hover:shadow-green-900/30 transition duration-300"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Chat</span>
            </a>
            <a
              href="#contact"
              className="bg-gold-gradient text-primary font-accent text-xs font-bold px-5 py-2 rounded-full border border-gold hover:shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            <a 
              href="tel:+919049998498"
              className="p-2 bg-gold/10 rounded-full border border-gold/20 text-gold hover:bg-gold/20 transition"
              title="Call Us"
            >
              <Phone size={16} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl border-b border-gold/15 py-6 px-6 flex flex-col space-y-4 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-accent text-sm font-semibold text-slate-300 hover:text-gold tracking-wide py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="https://wa.me/919049998498?text=Hello%20Kartik%20Tours%20and%20Travels,%20I%20want%20to%20inquire%20about%20booking%20a%20ride."
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 bg-green-600 text-white font-accent text-sm font-bold py-3 rounded-full hover:bg-green-700 transition"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Booking</span>
              </a>
              <a
                onClick={() => {
                  setIsOpen(false);
                  const contactSec = document.getElementById("contact");
                  if (contactSec) contactSec.scrollIntoView({ behavior: "smooth" });
                }}
                href="#contact"
                className="text-center bg-gold-gradient text-primary font-accent text-sm font-bold py-3 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Book Your Ride
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
