import React from 'react';
import { ShoppingBag, Utensils, Phone, Calendar, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { RESTAURANT_LINKS } from '@/data/links';
import { RESTAURANT_INFO } from '@/data/restaurant';

export default function OrderOnlineSection() {
  const channels = [
    {
      name: "Table & Majlis Booking",
      tagline: "Pre-book on Zomato",
      desc: "Reserve your private Arabian Majlis cabin or dining table in advance with flat 15% OFF on total bill.",
      buttonText: "Book a Table (15% OFF)",
      href: RESTAURANT_LINKS.zomatoBook,
      color: "bg-gold-500 hover:bg-gold-600 text-burgundy-950",
      badge: "Flat 15% OFF",
    },
    {
      name: "Zomato Delivery",
      tagline: "Online Delivery & Takeaway",
      desc: "Hot Mutton Juicy Mandi and Al-Faham chicken delivered quickly across Madhapur, Hitech City & Jubilee Hills.",
      buttonText: "Order on Zomato",
      href: RESTAURANT_LINKS.zomatoOrder,
      color: "bg-[#CB202D] hover:bg-[#b01a25] text-white",
      badge: "Fast Delivery",
    },
    {
      name: "Swiggy Delivery",
      tagline: "Doorstep Delivery",
      desc: "Order your favourite Mandi Bistro feasts and biryanis comfortably through Swiggy with live GPS tracking.",
      buttonText: "Order on Swiggy",
      href: RESTAURANT_LINKS.swiggy,
      color: "bg-[#FC8019] hover:bg-[#e67312] text-white",
      badge: "Quick Delivery",
    },
    {
      name: "Direct Phone Call",
      tagline: "Group Bookings & Late Night Orders",
      desc: "Planning a party, family gathering, or late night feast? Call the restaurant team directly.",
      buttonText: "Call +91 81432 71516",
      href: `tel:${RESTAURANT_INFO.phone}`,
      color: "bg-charcoal-900 hover:bg-charcoal-800 text-white",
      badge: "Direct Support",
    },
  ];

  return (
    <section id="order" className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <ShoppingBag className="w-3.5 h-3.5 text-gold-500" />
            <span>Reservations & Orders</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Reserve Your Majlis or Order Online
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            Enjoy Mandi Bistro's celebrated cuisine at our Madhapur restaurant or delivered to your doorstep.
          </p>
        </div>

        {/* Channel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {channels.map((channel, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-alabaster-50/70 border border-charcoal-200 hover:border-burgundy-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-charcoal-200 text-charcoal-700">
                    {channel.badge}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-1">
                  {channel.name}
                </h3>
                <p className="text-xs font-semibold text-burgundy-700 mb-2">
                  {channel.tagline}
                </p>
                <p className="text-xs text-charcoal-600 leading-relaxed mb-6">
                  {channel.desc}
                </p>
              </div>

              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs shadow-sm transition transform hover:-translate-y-0.5 ${channel.color}`}
              >
                <span>{channel.buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Late Night Banner */}
        <div className="p-6 rounded-2xl bg-burgundy-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-luxury">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-burgundy-800 border border-burgundy-700 flex items-center justify-center shrink-0 text-gold-400">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white mb-0.5">
                Late Night Mandi Craving? Open Till 2:30 AM!
              </h4>
              <p className="text-xs sm:text-sm text-alabaster-200">
                Full kitchen operating daily from 12:00 PM to 2:30 AM for dining, takeaway & delivery.
              </p>
            </div>
          </div>

          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-burgundy-950 font-bold text-xs sm:text-sm transition shadow-md"
          >
            <Phone className="w-4 h-4" /> Call for Late Night Order
          </a>
        </div>
      </div>
    </section>
  );
}
