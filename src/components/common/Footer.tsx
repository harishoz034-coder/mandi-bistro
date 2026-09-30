import React from 'react';
import Link from 'next/link';
import { RESTAURANT_INFO } from '@/data/restaurant';
import { RESTAURANT_LINKS } from '@/data/links';
import { Phone, MapPin, Clock, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-burgundy-950 text-white border-t border-burgundy-900 pt-16 pb-24 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-black text-gold-400">
              {RESTAURANT_INFO.brandDisplay}
            </h3>
            <p className="text-xs text-alabaster-200 leading-relaxed">
              Madhapur's top-rated Arabian Mandi & Biryani bistro. Sizzling juicy mutton shanks, fragrant Al-Faham chicken, and royal group majlis dining open late night until 2:30 AM.
            </p>
            <div className="flex items-center gap-3 text-xs text-gold-400 font-semibold">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                <span>4.4 Dining (1,953+ Reviews)</span>
              </span>
              <span>•</span>
              <span>3.9 Delivery</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4">
              Explore & Dine
            </h4>
            <ul className="space-y-2.5 text-xs text-alabaster-200">
              <li>
                <Link href="/#menu" className="hover:text-white transition">
                  Complete Menu (35+ Items)
                </Link>
              </li>
              <li>
                <Link href="/#specialities" className="hover:text-white transition">
                  Signature Mutton Juicy Mandi
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition">
                  Our Arabian Heritage
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-white transition">
                  Majlis & Ambience Gallery
                </Link>
              </li>
              <li>
                <Link href="/#offers" className="hover:text-white transition">
                  Table Booking & Bank Offers
                </Link>
              </li>
              <li>
                <Link href="/#location" className="hover:text-white transition">
                  Location & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4">
              Timings & Details
            </h4>
            <div className="space-y-2.5 text-xs text-alabaster-200">
              <p>
                <strong>Open Daily:</strong> 12:00 PM – 2:30 AM
              </p>
              <p>
                <strong>Late Night Kitchen:</strong> Active Till 2:30 AM
              </p>
              <p>
                <strong>Reservations:</strong> +91 81432 71516
              </p>
              <p>
                <strong>Cost for Two:</strong> ₹800 approx.
              </p>
              <p>
                <strong>Free Parking:</strong> Available
              </p>
            </div>
          </div>

          {/* Online Orders & Reservations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4">
              Table Booking & Delivery
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={RESTAURANT_LINKS.zomatoBook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-gold-500 hover:bg-gold-600 text-burgundy-950 text-xs font-bold text-center transition shadow-sm"
              >
                Pre-Book Table (Flat 15% OFF)
              </a>
              <a
                href={RESTAURANT_LINKS.zomatoOrder}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-burgundy-800 hover:bg-burgundy-700 text-white text-xs font-bold text-center transition"
              >
                Order on Zomato
              </a>
              <a
                href={RESTAURANT_LINKS.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold text-center transition"
              >
                Order on Swiggy
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-burgundy-900 text-center text-xs text-alabaster-300">
          <p>
            © 2026 Mandi Bistro. 102, 1st Floor, Premier Building, Plot 35, 36, 41, 42, Survey 76, Madhapur, Hyderabad, Telangana 500081. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
