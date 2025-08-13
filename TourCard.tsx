import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tour } from '@/data/tours'; // Tipimizi import ediyoruz

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <Link href={`/turlar/detay/${tour.id}`}>
        <div className="relative h-56">
          <Image
            src={tour.oneCikanGorsel}
            alt={tour.turAdi}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">{tour.kategori}</span>
          <h3 className="text-2xl font-bold text-gray-800 mb-2 h-20">{tour.turAdi}</h3>
          <p className="text-gray-600 mb-4">{tour.sure}</p>
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-700">Detayları Gör &rarr;</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TourCard;