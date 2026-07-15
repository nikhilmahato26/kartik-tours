import React from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to the Kartik Tours & Travels newsletter!");
    e.target.reset();
  };

  return (
    <footer className="bg-[#090D1A] text-slate-400 font-sans border-t border-gold/10 pt-16 pb-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Upper Footer: Info columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Col 1: Branding & Intro */}
          <div className="space-y-6">
            <a href="#home" className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                KARTIK
              </span>
              <span className="font-accent text-[9px] tracking-[0.25em] text-gold uppercase -mt-1 font-semibold">
                Tours & Travels
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed">
              Premium chauffeur-driven car rental services based in Chhatrapati Sambhaji Nagar (Aurangabad), Maharashtra. Safe, sanitized, and reliable travel experiences.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3.5 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 bg-primary hover:bg-gold hover:text-primary rounded-lg border border-slate-800 hover:border-gold text-slate-400 transition flex items-center justify-center"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h3v-9h3.3l.7-3H12V6c0-.9.2-1.2 1.2-1.2H15V2h-3c-3 0-3 2.2-3 3.8V8z"/></svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 bg-primary hover:bg-gold hover:text-primary rounded-lg border border-slate-800 hover:border-gold text-slate-400 transition flex items-center justify-center"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/></svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 bg-primary hover:bg-gold hover:text-primary rounded-lg border border-slate-800 hover:border-gold text-slate-400 transition flex items-center justify-center"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a 
                href="https://wa.me/919049998498" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 bg-primary hover:bg-gold hover:text-primary rounded-lg border border-slate-800 hover:border-gold text-slate-400 transition"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-6 text-gold-gradient">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm font-accent">
              <li>
                <a href="#home" className="hover:text-gold transition">Home Page</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition">Our Services</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-gold transition">Vehicle Fleet</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-gold transition">Why Choose Us</a>
              </li>
              <li>
                <a href="#routes" className="hover:text-gold transition">Popular Routes</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition">Book Your Cab</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-6 text-gold-gradient">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm font-sans">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span>
                  Plot No. 152, N-3, CIDCO, Chhatrapati Sambhaji Nagar, Aurangabad, MH
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a href="tel:+919049998498" className="hover:text-gold transition">
                  +91 9049998498
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a href="mailto:ganeshnarwade161@gmail.com" className="hover:text-gold transition break-all">
                  ganeshnarwade161@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-6 text-gold-gradient">
              Newsletter
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Subscribe to receive latest travel blogs, outstation tariffs, and holiday package discounts.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="relative">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-primary border border-slate-800 rounded-lg py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-gold transition duration-300"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-3 bg-gold-gradient text-primary rounded-md font-bold hover:shadow-md transition cursor-pointer"
                title="Subscribe"
              >
                <Send size={14} />
              </button>
            </form>
          </div>

        </div>

        {/* Lower Footer: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} Kartik Tours & Travels. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#faq" className="hover:text-gold transition">Privacy Policy</a>
            <a href="#faq" className="hover:text-gold transition">Terms & Conditions</a>
            <a href="#faq" className="hover:text-gold transition">Support Helpline</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
