import React from 'react';

// İkonlar için basit SVG komponentleri
const CompassIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const UserGroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.611-1.573V8.706a4.002 4.002 0 014.018-4.018H17M15 20l2.611 1.573A12.02 12.02 0 0021 12.02a11.955 11.955 0 01-5.618-3.04z" />
  </svg>
);

const WhyUs: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800">Neden Perla Paradise?</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Sıradan bir tatilden daha fazlasını vaat ediyoruz. Bizimle çıktığınız her yolculuk, unutulmaz bir hikayeye dönüşür.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center"><CompassIcon /></div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Özgün Rotalar</h3>
            <p className="text-gray-600">Herkesin gittiği yerlerin dışına çıkan, size özel olarak tasarlanmış, bölgenin ruhunu yansıtan seyahat planları sunuyoruz.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center"><UserGroupIcon /></div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Deneyimli Rehberler</h3>
            <p className="text-gray-600">Bölgeyi avucunun içi gibi bilen, tutkulu ve güler yüzlü rehberlerimizle yolculuğunuz sadece bir gezi değil, bir keşif olur.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center"><ShieldIcon /></div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Güven ve Konfor</h3>
            <p className="text-gray-600">Yolculuğunuzun her anında konforunuz ve güvenliğiniz bizim önceliğimizdir. Her detayı sizin için biz düşünüyoruz.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;