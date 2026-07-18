import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Shield } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, message } = formData;

    if (!name || !phone || !message) {
      alert("Please fill in the required fields (Name, Phone, and Message).");
      return;
    }

    // Construct WhatsApp message
    let whatsappMsg = `*Kartik Tours & Travels - Contact Inquiry*\n\n`;
    whatsappMsg += `*Client Name:* ${name}\n`;
    whatsappMsg += `*Phone:* ${phone}\n`;
    if (email) {
      whatsappMsg += `*Email:* ${email}\n`;
    }
    whatsappMsg += `*Message:* ${message}\n\n`;
    whatsappMsg += `Please respond to this inquiry as soon as possible.`;

    const encoded = encodeURIComponent(whatsappMsg);
    const url = `https://wa.me/919049998498?text=${encoded}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="bg-[#0F172A] py-24 md:py-32 px-4 md:px-10 border-b border-gold/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-gold font-accent text-xs font-bold uppercase tracking-[0.2em]">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Contact Chauffeur Dispatch
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6 rounded-full" />
          <p className="text-slate-400 text-sm md:text-base font-sans">
            Ready to plan your trip? Message our dispatcher or call our helpline directly. We are ready to assist you 24/7.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Info & Maps (5 cols on large screens) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            {/* Info Cards Stack */}
            <div className="space-y-6">
              
              {/* Phone Card */}
              <div className="bg-primary/50 border border-slate-800 rounded-xl p-5 flex items-center space-x-4">
                <div className="text-gold bg-gold/10 p-3 rounded-lg flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-slate-500 font-accent text-[10px] uppercase font-bold tracking-wider block">
                    Phone Helpline
                  </span>
                  <a href="tel:+919049998498" className="text-white hover:text-gold font-serif text-lg font-bold transition">
                    +91 9049998498
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-primary/50 border border-slate-800 rounded-xl p-5 flex items-center space-x-4">
                <div className="text-gold bg-gold/10 p-3 rounded-lg flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-slate-500 font-accent text-[10px] uppercase font-bold tracking-wider block">
                    Email Address
                  </span>
                  <a href="mailto:ganeshnarwade161@gmail.com" className="text-white hover:text-gold font-sans text-sm md:text-base font-semibold transition">
                    ganeshnarwade161@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Form (7 cols on large screens) */}
          <div className="lg:col-span-7">
            <div className="bg-primary/45 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Send Direct Message
              </h3>
              <p className="text-slate-400 text-xs md:text-sm font-sans mb-8">
                Fill the contact form below and our customer care coordinator will respond immediately to provide price estimates.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="relative">
                    <label className="block text-slate-300 text-xs font-accent font-bold mb-2 uppercase tracking-wider">
                      Your Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Full Name"
                      className="w-full px-4 py-3 bg-[#090D1A]/50 border border-slate-800 rounded-lg text-white placeholder-slate-600 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition duration-300"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <label className="block text-slate-300 text-xs font-accent font-bold mb-2 uppercase tracking-wider">
                      Contact Number <span className="text-gold">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 9999999999"
                      className="w-full px-4 py-3 bg-[#090D1A]/50 border border-slate-800 rounded-lg text-white placeholder-slate-600 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Email (Optional) */}
                <div className="relative">
                  <label className="block text-slate-300 text-xs font-accent font-bold mb-2 uppercase tracking-wider">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. yourname@domain.com"
                    className="w-full px-4 py-3 bg-[#090D1A]/50 border border-slate-800 rounded-lg text-white placeholder-slate-600 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition duration-300"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="block text-slate-300 text-xs font-accent font-bold mb-2 uppercase tracking-wider">
                    Message / Special Requests <span className="text-gold">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Enter trip schedule, route queries, multi-vehicle requirements, etc."
                    className="w-full px-4 py-3 bg-[#090D1A]/50 border border-slate-800 rounded-lg text-white placeholder-slate-600 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition duration-300 resize-none"
                    required
                  />
                </div>

                {/* CTA Submit Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
                  <div className="flex items-center space-x-2 text-slate-500 text-xs font-accent">
                    <Shield size={14} className="text-gold flex-shrink-0" />
                    <span>Instant Direct Response Guarantee</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gold-gradient text-primary font-accent font-bold text-sm tracking-wider uppercase px-8 py-3.5 rounded-lg border border-gold hover:shadow-xl hover:shadow-gold/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
                  >
                    <MessageCircle size={16} />
                    <span>Send on WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
