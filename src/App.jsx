import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Fleet from "./components/Fleet/Fleet";
import FleetComparison from "./components/Fleet/FleetComparison";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import PopularRoutes from "./components/PopularRoutes/PopularRoutes";
import BookingProcess from "./components/BookingProcess/BookingProcess";
import Statistics from "./components/Statistics/Statistics";
import Testimonials from "./components/Testimonials/Testimonials";
import Gallery from "./components/Gallery/Gallery";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FloatingActions from "./components/FloatingActions/FloatingActions";

export default function App() {
  return (
    <div className="relative w-full overflow-hidden text-slate-800 bg-[#F8FAFC]">
      {/* Header and Sticky Menus */}
      <Navbar />

      {/* Cinematic Hero & overlapping Booking Widget */}
      <Hero />

      {/* Spacing to clear the absolute overlapping Booking Widget */}
      <div className="h-28 md:h-32 bg-[#F8FAFC]" />

      {/* Core Body Sections */}
      <Fleet />
      <FleetComparison />
      <Services />
      <WhyChooseUs />
      <PopularRoutes />
      <BookingProcess />
      <Statistics />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />

      {/* Footer & Sticky Actions */}
      <Footer />
      <FloatingActions />
    </div>
  );
}
