import React from "react";
import { Check, Info, PhoneCall } from "lucide-react";
import { fleet } from "../../data/fleet";

export default function FleetComparison() {
  return (
    <section id="fleet-comparison" className="bg-[#090D1A] py-24 md:py-32 px-4 md:px-10 border-b border-gold/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-accent text-xs font-bold uppercase tracking-[0.2em]">
            Compare Specifications
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Fleet Comparison Matrix
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6 rounded-full" />
          <p className="text-slate-400 text-sm md:text-base font-sans">
            Choose the perfect ride for your destination. Compare vehicle capacities, comforts, and target use cases side-by-side.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-primary/80 border-b border-slate-800 text-gold font-accent text-xs font-bold uppercase tracking-wider">
                <th className="p-6">Vehicle Class</th>
                <th className="p-6">Category</th>
                <th className="p-6">Seating Capacity</th>
                <th className="p-6">Luggage Capacity</th>
                <th className="p-6">Comfort Level</th>
                <th className="p-6">Best Suited For</th>
                <th className="p-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50 text-slate-300 text-sm font-sans bg-primary/20">
              {fleet.map((car) => (
                <tr key={car.id} className="hover:bg-slate-800/30 transition duration-200">
                  {/* Name and Image Thumb */}
                  <td className="p-6 font-serif font-bold text-white">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-8 bg-slate-800 rounded flex items-center justify-center p-1">
                        <img src={car.image} alt={car.name} className="object-contain h-full" />
                      </div>
                      <span>{car.name}</span>
                    </div>
                  </td>
                  {/* Category */}
                  <td className="p-6">
                    <span className="inline-block bg-gold/10 text-gold border border-gold/20 text-xs px-2.5 py-0.5 rounded font-accent">
                      {car.category}
                    </span>
                  </td>
                  {/* Capacity */}
                  <td className="p-6 font-medium">{car.passengers} Passengers</td>
                  {/* Luggage */}
                  <td className="p-6">{car.luggage}</td>
                  {/* Comfort */}
                  <td className="p-6 text-white font-medium">{car.comfort}</td>
                  {/* Ideal Use Cases */}
                  <td className="p-6 text-xs max-w-xs leading-relaxed">
                    {car.idealFor.join(", ")}
                  </td>
                  {/* Action Button */}
                  <td className="p-6 text-center">
                    <a
                      href={`https://wa.me/919049998498?text=Hello%20Kartik%20Tours%20and%20Travels,%20I%20want%2520to%20book%20a%20${encodeURIComponent(car.name)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1.5 bg-gold-gradient text-primary font-accent text-xs font-bold px-4 py-2 rounded border border-gold hover:shadow-lg transition-all duration-300"
                    >
                      <PhoneCall size={12} />
                      <span>Select</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Informative Footer Box */}
        <div className="mt-8 bg-white/5 border border-white/5 rounded-xl p-5 flex items-start space-x-3">
          <Info size={18} className="text-gold mt-0.5 flex-shrink-0" />
          <p className="text-slate-400 text-xs leading-relaxed">
            *Pricing estimates shown are basic round-trip rates. Toll taxes, parking charges, interstate permit fees (if applicable), and driver allowances are extra. For a complete custom destination quote, kindly fill the booking widget above or speak to our customer support desk.
          </p>
        </div>

      </div>
    </section>
  );
}
