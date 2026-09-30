import React from 'react';
import { Utensils, Clock, IndianRupee, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/restaurant';

export default function QuickInfoBar() {
  const cards = [
    {
      icon: Utensils,
      title: "Cuisine & Specialities",
      detail: RESTAURANT_INFO.cuisine,
      subtext: "Juicy Mutton, Al-Faham & Arabian Feasts",
    },
    {
      icon: Clock,
      title: "Dining Hours & Late Night",
      detail: "12:00 Noon – 2:30 AM Daily",
      subtext: "Open continuously till 2:30 AM every day",
    },
    {
      icon: IndianRupee,
      title: "Cost for Two",
      detail: "₹800 for two people (approx.)",
      subtext: "Generous value feast platters",
    },
    {
      icon: MapPin,
      title: "Madhapur Location",
      detail: "Premier Building, 1st Floor",
      subtext: "Plot 35, 36, Survey 76, Madhapur",
    },
  ];

  return (
    <section className="bg-white border-y border-charcoal-200/80 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-alabaster-50/70 border border-charcoal-100 hover:border-burgundy-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-burgundy-700 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm font-bold text-charcoal-900 leading-snug">
                    {card.detail}
                  </p>
                  <p className="text-xs text-charcoal-500 mt-0.5">
                    {card.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
