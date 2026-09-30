import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Flame, Moon, Users, Award } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/restaurant';

export default function AboutSection() {
  const highlights = [
    {
      icon: Flame,
      title: "Authentic Yemeni Pit-Dum Method",
      desc: "Slow-steamed spiced basmati rice and fall-apart tender mutton cooked using traditional Arabic pit techniques.",
    },
    {
      icon: Users,
      title: "Private Majlis & Floor Dining",
      desc: "Enjoy traditional Arabian dining on plush carpeted majlis setups designed for family gatherings & friends.",
    },
    {
      icon: Moon,
      title: "Open Late Night till 2:30 AM",
      desc: "Satisfy midnight hunger pangs with piping hot Mandi and sizzling char-grills in the heart of Madhapur.",
    },
    {
      icon: Award,
      title: "Exceptional Value & Portions",
      desc: "Generous royal feast platters starting at just ₹800 for two people with rich soup and tomato salsa.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-ivory-50/70 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Collage with Authentic Zomato Photos */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-charcoal-200">
                  <img
                    src="/images/mandi_bistro_ambience_1.jpg"
                    alt="Mandi Bistro Majlis Floor Dining Setup"
                    className="w-full h-52 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-charcoal-200">
                  <img
                    src="/images/mandi_bistro_ambience_3.jpg"
                    alt="Mandi Bistro Restaurant Interior"
                    className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden shadow-md border border-charcoal-200">
                  <img
                    src="/images/mandi_bistro_ambience_2.jpg"
                    alt="Mandi Bistro Seating Hall"
                    className="w-full h-44 sm:h-52 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-charcoal-200 bg-burgundy-700 text-white p-6 flex flex-col justify-center text-center">
                  <span className="font-serif text-3xl sm:text-4xl font-black text-gold-400 mb-1">
                    4.4 ★
                  </span>
                  <p className="text-xs uppercase tracking-widest font-semibold text-alabaster-100">
                    1,953+ Dining Reviews
                  </p>
                  <p className="text-[11px] text-alabaster-200 mt-2">
                    Madhapur's Highest-Rated Late Night Mandi
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Accent */}
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gold-400/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right Column: Story & Highlights */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>The Mandi Bistro Experience</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-6 leading-tight">
              Authentic Arabian Feasts in the Heart of Madhapur
            </h2>

            <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed mb-6">
              Located on the <strong>1st Floor, Premier Building, Madhapur</strong>, <strong>Mandi Bistro</strong> has earned over 1,950+ stellar reviews for serving authentic Middle Eastern Mandi. Featuring melt-in-mouth juicy mutton, smoky Al-Faham grilled chicken, and rich Yemeni rice served on traditional community majlis trays.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-charcoal-200/80">
                    <div className="w-8 h-8 rounded-lg bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-charcoal-900 mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-charcoal-500 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 text-xs font-bold text-burgundy-800">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Halal Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Family Majlis Rooms</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Open Till 2:30 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
