import React from 'react';
import MenuPreview from '@/components/home/MenuPreview';
import OffersSection from '@/components/home/OffersSection';
import OrderOnlineSection from '@/components/home/OrderOnlineSection';

export const metadata = {
  title: "Full Menu | Mandi Bistro Madhapur Hyderabad",
  description: "Browse the complete dining & delivery menu of Mandi Bistro. Mutton Juicy Mandi, Al-Faham Chicken, Seafood Mandi, Biryani & Kunafa.",
};

export default function MenuPage() {
  return (
    <div className="pt-6">
      <MenuPreview />
      <OffersSection />
      <OrderOnlineSection />
    </div>
  );
}
