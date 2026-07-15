import React from "react";
import { motion } from "framer-motion";
import { Car, FileText, BadgeDollarSign, CheckSquare, UserCheck, HeartHandshake } from "lucide-react";

export default function BookingProcess() {
  const steps = [
    {
      icon: Car,
      title: "Choose Vehicle",
      description: "Select from our range of sedans (Dzire, Aura), MPVs (Ertiga), or SUVs (Innova Crysta)."
    },
    {
      icon: FileText,
      title: "Share Trip Details",
      description: "Fill the quick details booking form specifying pickup location, dates, times, and destinations."
    },
    {
      icon: BadgeDollarSign,
      title: "Receive Instant Quote",
      description: "Our dispatcher checks route details and immediately sends a transparent, all-inclusive price quote."
    },
    {
      icon: CheckSquare,
      title: "Confirm Booking",
      description: "Lock in your booking with an instant booking confirmation token sent directly to your phone."
    },
    {
      icon: UserCheck,
      title: "Driver Assigned",
      description: "Driver details and location coordinates are dispatched to you 3 hours prior to your scheduled pickup."
    },
    {
      icon: HeartHandshake,
      title: "Enjoy Your Journey",
      description: "Embark on a safe, sanitised, and incredibly comfortable travel experience with our verified chauffeur."
    }
  ];

  return (
    <section id="process" className="bg-[#0F172A] py-24 md:py-32 px-4 md:px-10 border-b border-gold/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold font-accent text-xs font-bold uppercase tracking-[0.2em]">
            Step-by-step
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Simple Booking Process
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6 rounded-full" />
          <p className="text-slate-400 text-sm md:text-base font-sans">
            Renting a premium vehicle has never been this simple. Follow our clear, transparent process flow to reserve your cab in minutes.
          </p>
        </div>

        {/* Timeline Flow (Alternate Left/Right on Desktop, Linear on Mobile) */}
        <div className="relative border-l md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-0.5 md:before:bg-slate-800 before:content-[''] space-y-12 max-w-5xl mx-auto pl-8 md:pl-0">
          {steps.map((step, index) => {
            const IconComp = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={step.title} className="relative flex flex-col md:flex-row md:items-center">
                {/* Connector Node */}
                <div className="absolute left-[-41px] md:left-1/2 md:-translate-x-1/2 top-2 z-10 w-6 h-6 rounded-full bg-primary border-2 border-gold flex items-center justify-center shadow-lg shadow-gold/20">
                  <div className="w-2 h-2 rounded-full bg-gold animate-ping" />
                </div>

                {/* Left Card Placeholder / Real Card */}
                <div className={`w-full md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:order-2"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-[#090D1A] border border-slate-800 rounded-xl p-6 hover:border-gold/25 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300 inline-block text-left"
                  >
                    <div className={`flex items-start ${isEven ? "md:flex-row-reverse" : "flex-row"} gap-4`}>
                      {/* Icon */}
                      <div className="flex-shrink-0 text-gold bg-gold/10 p-3 rounded-lg h-12 w-12 flex items-center justify-center">
                        <IconComp size={20} />
                      </div>
                      <div>
                        <span className="text-gold font-accent text-xs font-bold uppercase tracking-wider block mb-1">
                          Step 0{index + 1}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-slate-400 text-sm font-sans leading-relaxed max-w-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty Side for Grid Alignment */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
