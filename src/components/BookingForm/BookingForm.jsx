import React, { useState } from "react";
import { MapPin, Calendar, Clock, Car, Users, ArrowRightLeft, Shield } from "lucide-react";
import { fleet } from "../../data/fleet";

export default function BookingForm() {
  const [tripType, setTripType] = useState("oneway"); // oneway, roundtrip, local
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState(fleet[0]?.name || "Hyundai Aura");
  const [passengers, setPassengers] = useState("1-4");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validations
    if (!pickupLocation || !pickupDate || !pickupTime) {
      alert("Please fill in the pickup location, date, and time.");
      return;
    }
    if (tripType !== "local" && !dropLocation) {
      alert("Please fill in the drop-off location.");
      return;
    }

    // Construct WhatsApp Message
    const tripTypeNames = {
      oneway: "One-Way Trip",
      roundtrip: "Round-Trip",
      local: "Local Sightseeing / Airport Transfer"
    };

    let message = `*Kartik Tours & Travels - Booking Inquiry*\n\n`;
    message += `*Trip Type:* ${tripTypeNames[tripType]}\n`;
    message += `*Pickup Location:* ${pickupLocation}\n`;
    if (tripType !== "local") {
      message += `*Drop-off Location:* ${dropLocation}\n`;
    }
    message += `*Pickup Date:* ${pickupDate}\n`;
    message += `*Pickup Time:* ${pickupTime}\n`;
    if (tripType === "roundtrip" && returnDate) {
      message += `*Return Date:* ${returnDate}\n`;
    }
    message += `*Vehicle Preference:* ${selectedVehicle}\n`;
    message += `*Passenger Count:* ${passengers}\n\n`;
    message += `Please share the estimated quote and driver availability. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919049998498?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="w-full glassmorphism rounded-2xl p-6 md:p-8 shadow-2xl border border-gold/20 max-w-5xl mx-auto">
      {/* Tabs */}
      <div className="flex space-x-2 border-b border-slate-700/50 pb-4 mb-6">
        <button
          type="button"
          onClick={() => setTripType("oneway")}
          className={`flex-1 py-3 px-4 rounded-lg font-accent text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 ${
            tripType === "oneway"
              ? "bg-gold-gradient text-primary shadow-lg shadow-gold/20"
              : "text-slate-300 hover:text-white hover:bg-white/5"
          }`}
        >
          One-Way
        </button>
        <button
          type="button"
          onClick={() => setTripType("roundtrip")}
          className={`flex-1 py-3 px-4 rounded-lg font-accent text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 ${
            tripType === "roundtrip"
              ? "bg-gold-gradient text-primary shadow-lg shadow-gold/20"
              : "text-slate-300 hover:text-white hover:bg-white/5"
          }`}
        >
          Round-Trip
        </button>
        <button
          type="button"
          onClick={() => setTripType("local")}
          className={`flex-1 py-3 px-4 rounded-lg font-accent text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 ${
            tripType === "local"
              ? "bg-gold-gradient text-primary shadow-lg shadow-gold/20"
              : "text-slate-300 hover:text-white hover:bg-white/5"
          }`}
        >
          Local / Transfers
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Pickup Location */}
          <div className="relative">
            <label className="block text-slate-300 text-xs font-accent font-bold mb-2 uppercase tracking-wider">
              Pickup Location
            </label>
            <div className="relative">
              <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold" />
              <input
                type="text"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                placeholder="Hotel, Airport, Address in Aurangabad"
                className="w-full pl-10 pr-4 py-3 bg-primary/45 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition duration-300"
                required
              />
            </div>
          </div>

          {/* Drop Location */}
          {tripType !== "local" ? (
            <div className="relative">
              <label className="block text-slate-300 text-xs font-accent font-bold mb-2 uppercase tracking-wider">
                Drop Location
              </label>
              <div className="relative">
                <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold" />
                <input
                  type="text"
                  value={dropLocation}
                  onChange={(e) => setDropLocation(e.target.value)}
                  placeholder="Destination City, Landmark, Station"
                  className="w-full pl-10 pr-4 py-3 bg-primary/45 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition duration-300"
                  required
                />
              </div>
            </div>
          ) : (
            <div className="relative">
              <label className="block text-slate-300 text-xs font-accent font-bold mb-2 uppercase tracking-wider">
                Package / Service
              </label>
              <div className="relative">
                <ArrowRightLeft size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold" />
                <select
                  value={dropLocation}
                  onChange={(e) => setDropLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-primary/45 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-gold transition duration-300 appearance-none"
                >
                  <option className="bg-[#1e293b]" value="Aurangabad Sightseeing (Full Day)">Aurangabad Sightseeing (Full Day)</option>
                  <option className="bg-[#1e293b]" value="Ellora & Grishneshwar Tour">Ellora & Grishneshwar Tour</option>
                  <option className="bg-[#1e293b]" value="Ajanta Caves Tour">Ajanta Caves Tour</option>
                  <option className="bg-[#1e293b]" value="Airport Pickup / Drop">Airport Pickup / Drop</option>
                  <option className="bg-[#1e293b]" value="Railway Station Pickup / Drop">Railway Station Pickup / Drop</option>
                  <option className="bg-[#1e293b]" value="Custom Local Hourly Package">Custom Local Hourly Package</option>
                </select>
              </div>
            </div>
          )}

          {/* Pickup Date */}
          <div className="relative">
            <label className="block text-slate-300 text-xs font-accent font-bold mb-2 uppercase tracking-wider">
              Pickup Date
            </label>
            <div className="relative">
              <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold" />
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-primary/45 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-gold transition duration-300"
                required
              />
            </div>
          </div>

          {/* Pickup Time */}
          <div className="relative">
            <label className="block text-slate-300 text-xs font-accent font-bold mb-2 uppercase tracking-wider">
              Pickup Time
            </label>
            <div className="relative">
              <Clock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold" />
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-primary/45 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-gold transition duration-300"
                required
              />
            </div>
          </div>

          {/* Return Date (only for Round-Trip) */}
          {tripType === "roundtrip" && (
            <div className="relative">
              <label className="block text-slate-300 text-xs font-accent font-bold mb-2 uppercase tracking-wider">
                Return Date
              </label>
              <div className="relative">
                <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold" />
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-primary/45 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-gold transition duration-300"
                  required={tripType === "roundtrip"}
                />
              </div>
            </div>
          )}

          {/* Vehicle Selection */}
          <div className="relative">
            <label className="block text-slate-300 text-xs font-accent font-bold mb-2 uppercase tracking-wider">
              Select Vehicle
            </label>
            <div className="relative">
              <Car size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold" />
              <select
                value={selectedVehicle}
                onChange={(e) => setSelectedVehicle(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-primary/45 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-gold transition duration-300 appearance-none"
              >
                {fleet.map((car) => (
                  <option className="bg-[#1e293b]" key={car.id} value={car.name}>
                    {car.name} ({car.category})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Passenger Count */}
          <div className="relative">
            <label className="block text-slate-300 text-xs font-accent font-bold mb-2 uppercase tracking-wider">
              Passengers
            </label>
            <div className="relative">
              <Users size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold" />
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-primary/45 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-gold transition duration-300 appearance-none"
              >
                <option className="bg-[#1e293b]" value="1-4">1 - 4 Passengers (Sedan)</option>
                <option className="bg-[#1e293b]" value="5-7">5 - 7 Passengers (MPV / SUV)</option>
                <option className="bg-[#1e293b]" value="7+">More than 7 (Multiple Vehicles)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submit Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-slate-700/50 gap-4">
          <div className="flex items-center space-x-2 text-slate-400 text-xs font-accent">
            <Shield size={14} className="text-gold" />
            <span>24/7 Availability • Transparent Billing • Safe Travel Guarantee</span>
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-gold-gradient text-primary font-accent font-bold text-sm tracking-wider uppercase px-8 py-3.5 rounded-lg border border-gold hover:shadow-xl hover:shadow-gold/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
          >
            Book My Ride Now
          </button>
        </div>
      </form>
    </div>
  );
}
