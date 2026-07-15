import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a cab with Kartik Tours & Travels?",
      answer: "Booking is extremely simple! You can use our floating booking form above to enter your locations, dates, and vehicle choice. Submitting the form will construct a pre-filled message and direct you to WhatsApp to confirm with our dispatcher. Alternatively, you can click the WhatsApp button or call us directly at +91 9049998498."
    },
    {
      question: "Do you provide airport pickups and drops?",
      answer: "Yes, we provide reliable airport pickup and drop services for Chhatrapati Sambhaji Nagar (Aurangabad) Airport. Our chauffeurs monitor flight landing timelines to ensure punctual arrivals, holding placards at the terminal exit."
    },
    {
      question: "Do you offer outstation trips?",
      answer: "Absolutely. We offer outstation cab services across all major cities in Maharashtra (including Pune, Mumbai, Nashik, Shirdi) and neighboring states. You can book both one-way transfers and round-trip packages."
    },
    {
      question: "Can I book a one-way trip, or do I have to pay for round-trip?",
      answer: "Yes, you can book one-way outstation trips. You only pay for the distance traveled one-way, with no return fare charges, providing affordable and transparent pricing."
    },
    {
      question: "Are your drivers background verified?",
      answer: "Yes, passenger safety is our top priority. All our chauffeurs are highly experienced, background-verified, legally licensed, and trained to interact professionally with local and corporate travelers."
    },
    {
      question: "Do you provide corporate car rentals?",
      answer: "Yes, we offer custom monthly corporate car rental packages, executive airport transfers, and VIP guest travel coordination for companies and businesses in CIDCO and surrounding Aurangabad industrial hubs."
    },
    {
      question: "Can I hire a vehicle for weddings and special events?",
      answer: "Yes, we provide premium vehicles like the Toyota Innova Crysta and Maruti Ertiga for wedding guest coordination. We can also arrange elegant vehicle decoration upon request."
    },
    {
      question: "How can I contact customer support if my travel plans change?",
      answer: "Our customer support is available 24/7. You can reach out immediately via phone call or WhatsApp message at +91 9049998498 to update your pickup dates, times, or vehicle choices."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F8FAFC] py-24 md:py-32 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-accent text-xs font-bold uppercase tracking-[0.2em]">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mt-3 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6 rounded-full" />
          <p className="text-slate-600 text-sm md:text-base font-sans">
            Have queries regarding bookings, route tariffs, or driver assignments? Explore our quick answers.
          </p>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300"
              >
                {/* Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-accent hover:bg-slate-50 transition cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5">
                    <HelpCircle size={16} className="text-gold flex-shrink-0" />
                    <span className="text-primary font-bold text-sm md:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-slate-400">
                    {isOpen ? <Minus size={18} className="text-gold" /> : <Plus size={18} />}
                  </div>
                </button>

                {/* Animated Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-500 font-sans text-sm md:text-base leading-relaxed border-t border-slate-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
