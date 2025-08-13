"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import InteractiveMap from '../components/InteractiveMap';
import Categories from '../components/Categories';
import WhyUs from '../components/WhyUs';
import TourWizard from '../components/TourWizard';
import Testimonials from '../components/Testimonials';
import ScrollAnimation from '../components/ScrollAnimation';
import { toursData, Tour } from '../data/tours';
import Link from 'next/link';
import { Parallax } from 'react-parallax';

// Türkçe karakterleri ve büyük/küçük harfi önemsemeyen bir karşılaştırma için yardımcı fonksiyon
const normalizeString = (str: string) => {
  return str
    .replace(/İ/g, 'I').replace(/ı/g, 'i').replace(/Ç/g, 'C').replace(/ç/g, 'c')
    .replace(/Ş/g, 'S').replace(/ş/g, 's').replace(/Ğ/g, 'G').replace(/ğ/g, 'g')
    .replace(/Ü/g, 'U').replace(/ü/g, 'u').replace(/Ö/g, 'O').replace(/ö/g, 'o')
    .toLowerCase();
};

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);

  const handleCitySelect = (cityName: string) => {
    setSelectedCity(cityName);
    const normalizedCityName = normalizeString(cityName);
    const foundTours = toursData.filter(tour => 
      tour.sehirler.some(sehir => normalizeString(sehir) === normalizedCityName)
    );
    setFilteredTours(foundTours);
  };

  return (
    <main className="bg-gray-100">
      <Navbar />
      <Hero />

      <section id="turlar-bolumu">
        <Parallax
          bgImage="/pamukkale.jpg" // Resim adını `map-bg.jpg` yerine `pamukkale.jpg` olarak güncelledim
          bgImageAlt="Türkiye Haritası Arka Planı"
          strength={500}
        >
          <div className="py-24 px-4">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="container mx-auto relative z-20">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-extrabold text-white drop-shadow-lg">Turlarımızı Keşfedin</h2>
                <p className="text-xl text-gray-200 mt-4 max-w-3xl mx-auto drop-shadow-md">Haritadan gitmek istediğiniz şehri seçin ve size özel hazırladığımız maceraları görün.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="lg:sticky top-28 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-4">
                  <InteractiveMap onCitySelect={handleCitySelect} />
                </div>
                <div className="flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 text-white">
                  {selectedCity ? (
                    <h3 className="text-3xl font-bold mb-6 text-white drop-shadow-md">{selectedCity} Bölgesindeki Turlar</h3>
                  ) : (
                    <div className="flex-grow flex flex-col items-center justify-center h-full text-center">
                        <h3 className="text-2xl font-bold text-gray-100">Lütfen Bir Şehir Seçiniz...</h3>
                        <p className="text-gray-300 mt-2">İlgili turları görmek için haritaya tıklayın.</p>
                    </div>
                  )}
                  {filteredTours.length > 0 ? (
                    <div className="space-y-6">
                        {filteredTours.map(tour => (
                            <div key={tour.id} className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-all duration-300">
                                <h4 className="text-2xl font-bold">{tour.turAdi}</h4>
                                <p className="text-gray-200 mt-2">{tour.aciklama}</p>
                                <div className="mt-5 pt-4 border-t border-white/20 flex justify-between items-center">
                                    <p className="text-sm">
                                        Bölge Sorumlusu: <strong className="font-semibold">{tour.rehber.isim}</strong>
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <Link href={`/turlar/detay/${tour.id}`} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105 text-sm whitespace-nowrap">
                                            Detayları Gör
                                        </Link>
                                        <a href={`https://wa.me/${tour.rehber.whatsapp}?text=Merhaba, '${tour.turAdi}' hakkında bilgi almak istiyorum.`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-transform transform hover:scale-105" aria-label="WhatsApp ile Bilgi Al">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                  ) : (
                    selectedCity && <p className="flex-grow flex items-center justify-center text-center text-gray-300">Bu bölgede henüz aktif bir turumuz bulunmamaktadır.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </section>
      <Categories />
<ScrollAnimation delay={200}>
 <TourWizard />
</ScrollAnimation>
<ScrollAnimation delay={200}>
 <WhyUs />
</ScrollAnimation>
<ScrollAnimation delay={200}>
 <Testimonials />
</ScrollAnimation>


     
      
    </main>
  );
}