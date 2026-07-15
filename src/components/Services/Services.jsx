import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Compass, 
  Plane, 
  Train, 
  Briefcase, 
  Users, 
  Heart, 
  Hotel, 
  ShieldCheck 
} from "lucide-react";
import { services } from "../../data/services";

const iconMap = {
  MapPin: MapPin,
  Compass: Compass,
  Plane: Plane,
  Train: Train,
  Briefcase: Briefcase,
  Users: Users,
  Heart: Heart,
  Hotel: Hotel,
  ShieldCheck: ShieldCheck
};

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="bg-[#090D1A] py-32 md:py-40 px-4 md:px-10 border-b border-gold/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-gold font-accent text-xs font-bold uppercase tracking-[0.2em]">
            Professional Offerings
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Our Premium Fleet Services
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6 rounded-full" />
          <p className="text-slate-400 text-sm md:text-base font-sans">
            Kartik Tours & Travels provides bespoke transportation experiences in Aurangabad and across Maharashtra. Fully customizable, safe, and available around the clock.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || MapPin;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="bg-primary/50 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-gold/30 hover:bg-[#0B0F20] hover:shadow-2xl hover:shadow-gold/5 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-primary transition-all duration-300 mb-6">
                    <IconComponent size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="mt-8 flex items-center text-gold font-accent text-xs font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                  <a 
                    href={`https://wa.me/919049998498?text=Hello%20Kartik%20Tours%2526Travels,%20I%20want%20to%20inquire%20about%20your%20*${encodeURIComponent(service.title)}*%20service.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1 hover:underline"
                  >
                    <span>Inquire Now</span>
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
