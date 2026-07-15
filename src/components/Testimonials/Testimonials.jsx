import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../data/testimonials";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 md:py-32 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-gold font-accent text-xs font-bold uppercase tracking-[0.2em]">
              Client Feedback
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mt-3">
              Google Customer Reviews
            </h2>
            <div className="w-20 h-1 bg-gold mt-4 mb-6 rounded-full" />
            <p className="text-slate-600 text-sm md:text-base font-sans">
              Read stories from travelers, tourists, and corporate coordinators who choose Kartik Tours & Travels.
            </p>
          </div>
          
          {/* Custom Navigation Arrows */}
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button className="swiper-prev-btn p-3 rounded-full border border-slate-200 text-slate-600 hover:bg-primary hover:text-white transition duration-300 shadow-sm cursor-pointer">
              <ChevronLeft size={16} />
            </button>
            <button className="swiper-next-btn p-3 rounded-full border border-slate-200 text-slate-600 hover:bg-primary hover:text-white transition duration-300 shadow-sm cursor-pointer">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            navigation={{
              nextEl: ".swiper-next-btn",
              prevEl: ".swiper-prev-btn",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between h-[320px] relative hover:shadow-md transition duration-300">
                  {/* Quote decoration */}
                  <Quote size={40} className="absolute right-6 top-6 text-slate-200 pointer-events-none" />

                  {/* Rating Stars */}
                  <div>
                    <div className="flex space-x-1 mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-gold text-gold" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-slate-600 text-sm font-sans italic leading-relaxed line-clamp-5 mb-6">
                      "{item.review}"
                    </p>
                  </div>

                  {/* Customer Block */}
                  <div className="flex items-center space-x-4 border-t border-slate-200/50 pt-4">
                    {/* Circle Avatar (using initials) */}
                    <div className="h-10 w-10 rounded-full bg-gold-gradient text-primary flex items-center justify-center font-accent text-xs font-bold border border-gold/30">
                      {item.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-primary">
                        {item.name}
                      </h4>
                      <div className="flex items-center text-[10px] text-slate-400 font-accent mt-0.5 space-x-1.5">
                        <span>{item.role}</span>
                        <span>•</span>
                        <span className="text-slate-500 font-semibold">{item.trip}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
