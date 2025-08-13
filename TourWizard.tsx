"use client";

import React, { useState } from 'react';
import { toursData, Tour } from '../data/tours';
import TourCard from './TourCard';

const TourWizard: React.FC = () => {
  const [adventureType, setAdventureType] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [recommendedTour, setRecommendedTour] = useState<Tour | null>(null);
  const [searched, setSearched] = useState(false);

  const adventureOptions = ['Kültür', 'Doğa', 'Tatil', 'Tarih', 'Günübirlik'];
  const durationOptions = {
    'Günübirlik': ['Günübirlik'],
    'Kısa Kaçamak (1-3 Gün)': ['1 Gece / 2 Gün', '2 Gece / 3 Gün'],
    'Orta Uzunlukta (4-6 Gün)': ['3 Gece / 4 Gün', '4 Gece / 5 Gün', '4 Gece / 6 Gün'],
  };

  const handleFindTour = () => {
    setSearched(true);
    let filtered = toursData;

    if (adventureType) {
        filtered = filtered.filter(tour => tour.kategori === adventureType);
    }

    if (duration) {
      const durationValues = durationOptions[duration as keyof typeof durationOptions];
      filtered = filtered.filter(tour => durationValues.includes(tour.sure));
    }

    if (filtered.length > 0) {
      const randomIndex = Math.floor(Math.random() * filtered.length);
      setRecommendedTour(filtered[randomIndex]);
    } else {
      setRecommendedTour(null);
    }
  };

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">Hayalindeki Turu Bulalım!</h2>
        <p className="text-lg lg:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Nereye gitmek istediğine karar veremiyor musun? Birkaç basit soruyla sana en uygun macerayı önerelim.</p>

        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">1. Nasıl bir macera arıyorsun?</h3>
                <div className="flex flex-wrap gap-3">
                  {adventureOptions.map(option => (
                      <button key={option} onClick={() => setAdventureType(option)} className={`px-5 py-2 rounded-full font-medium transition-colors duration-200 text-sm ${adventureType === option ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-800 hover:bg-gray-700 text-gray-300'}`}>
                      {option}
                      </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">2. Ne kadar zamanın var?</h3>
                <div className="flex flex-wrap gap-3">
                  {Object.keys(durationOptions).map(option => (
                      <button key={option} onClick={() => setDuration(option)} className={`px-5 py-2 rounded-full font-medium transition-colors duration-200 text-sm ${duration === option ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-800 hover:bg-gray-700 text-gray-300'}`}>
                      {option}
                      </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleFindTour}
              disabled={!adventureType || !duration}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:bg-gray-500 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Önerini Göster!
            </button>
        </div>

        {/* ----- DEĞİŞİKLİK BURADA ----- */}
        <div className="mt-12 transition-all duration-500 ease-in-out">
          {recommendedTour ? (
            <div className="w-full max-w-md mx-auto animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">Sana özel önerimiz:</h3>
              <TourCard tour={recommendedTour} />
            </div>
          ) : (
            searched && <p className="text-xl text-gray-400 mt-8 animate-fade-in">Üzgünüz, seçtiğin kriterlere uygun bir tur bulamadık. Lütfen farklı bir seçim deneyin.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TourWizard;