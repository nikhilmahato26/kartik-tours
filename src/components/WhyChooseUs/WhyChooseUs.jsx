import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Sparkles, 
  Coins, 
  Clock, 
  Car, 
  Headphones, 
  CheckCircle 
} from "lucide-react";

export default function WhyChooseUs() {
  const mainUSPs = [
    {
      icon: ShieldCheck,
      title: "Professional Drivers",
      description: "Our chauffeurs are highly experienced, background-verified, polite, and well-trained in local route navigation."
    },
    {
      icon: Sparkles,
      title: "Sanitized Vehicles",
      description: "Cars are deep cleaned and sanitized before and after every trip, ensuring safe and hygienic journeys."
    },
    {
      icon: Coins,
      title: "Affordable Pricing",
      description: "Get premium luxury transport services at highly competitive prices with zero booking or platform markup fees."
    },
    {
      icon: Clock,
      title: "On-Time Service",
      description: "Punctuality is our priority. We monitor arrival details to guarantee our drivers are ready before your scheduled time."
    },
    {
      icon: Car,
      title: "Luxury Fleet",
      description: "A wide selection of well-maintained premium sedans, spacious MPVs, and luxury SUVs for every travel need."
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available round-the-clock to manage route shifts or emergency travel bookings."
    }
  ];

  const secondaryUSPs = [
    "GPS Enabled Vehicles",
    "Comfortable Travel",
    "Transparent Pricing (No Hidden Fees)",
    "Safe & Secure Rides",
    "Corporate Travel Solutions",
    "Family-Friendly Service"
  ];

  return (
    <section id="why-choose-us" className="bg-[#0F172A] py-24 md:py-32 px-4 md:px-10 border-b border-gold/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-gold font-accent text-xs font-bold uppercase tracking-[0.2em]">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Establishing the Standard of Luxury Travel
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6 rounded-full" />
          <p className="text-slate-400 text-sm md:text-base font-sans">
            We merge premium vehicle options with standard-setting service parameters to ensure that every kilometer you spend with us is comfortable, safe, and stress-free.
          </p>
        </div>

        {/* 2-Column Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Grid (Left side) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {mainUSPs.map((usp, index) => {
              const IconComp = usp.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  key={usp.title}
                  className="bg-primary/40 border border-slate-800 rounded-xl p-6 hover:border-gold/20 transition-all duration-300"
                >
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 text-gold bg-gold/10 p-3 rounded-lg h-12 w-12 flex items-center justify-center">
                      <IconComp size={20} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white mb-2">
                        {usp.title}
                      </h3>
                      <p className="text-slate-400 text-sm font-sans leading-relaxed">
                        {usp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right side checkmark checklist */}
          <div className="lg:col-span-4 bg-[#090D1A] border border-gold/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-300">
            <h3 className="font-serif text-2xl font-bold text-white mb-6 text-gold-gradient">
              Additional Benefits
            </h3>
            <p className="text-slate-400 text-sm font-sans mb-8">
              We cover all safety and coordination logistics behind the scenes, so you can enjoy your ride.
            </p>

            <div className="space-y-4">
              {secondaryUSPs.map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  key={item} 
                  className="flex items-start space-x-3"
                >
                  <CheckCircle size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-slate-200 text-sm font-sans font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <a 
                href="tel:+919049998498"
                className="block text-center bg-gold-gradient text-primary font-accent text-xs font-bold uppercase tracking-wider py-3.5 rounded-lg border border-gold hover:shadow-lg transition-all duration-300"
              >
                Call Chauffeur Hotline
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
