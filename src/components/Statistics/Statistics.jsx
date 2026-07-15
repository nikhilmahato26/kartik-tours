import React, { useEffect, useState, useRef } from "react";
import { Award, Heart, CheckSquare, PhoneCall } from "lucide-react";

function CountUp({ end, suffix = "", duration = 1500 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, hasStarted]);

  return (
    <span ref={countRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Statistics() {
  const statsList = [
    {
      icon: CheckSquare,
      number: 10000,
      suffix: "+",
      label: "Successful Trips"
    },
    {
      icon: Heart,
      number: 5000,
      suffix: "+",
      label: "Happy Customers"
    },
    {
      icon: Award,
      number: 100,
      suffix: "%",
      label: "Customer Satisfaction"
    },
    {
      icon: PhoneCall,
      number: 24,
      suffix: "/7",
      label: "Customer Support"
    },
    {
      icon: CheckSquare,
      number: 100,
      suffix: "%",
      label: "Sanitized Vehicles"
    }
  ];

  return (
    <section id="statistics" className="relative bg-[#090D1A] py-16 px-4 md:px-10 border-b border-gold/5 overflow-hidden">
      {/* Premium subtle gold lighting overlay background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-40 left-1/4 w-80 h-80 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute -bottom-40 right-1/4 w-80 h-80 rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {statsList.map((stat, index) => {
            const IconComp = stat.icon;
            return (
              <div 
                key={stat.label} 
                className={`p-4 flex flex-col items-center justify-center ${
                  index !== statsList.length - 1 ? "lg:border-r lg:border-slate-800" : ""
                }`}
              >
                {/* Icon */}
                <div className="text-gold mb-4 p-2.5 bg-gold/5 rounded-lg">
                  <IconComp size={22} />
                </div>
                
                {/* Number */}
                <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white text-gold-gradient mb-2 tracking-tight">
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-slate-400 font-accent text-[11px] md:text-xs font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
