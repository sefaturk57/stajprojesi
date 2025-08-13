import React from 'react';
import Image from 'next/image';

const QuoteIcon = () => (
  <svg className="h-12 w-12 text-blue-200" fill="currentColor" viewBox="0 0 448 512">
    <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h128c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h128c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V216z" />
  </svg>
);

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-800">Mutlu Müşterilerimiz</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">Bizimle yaşadıkları deneyimleri onlardan dinleyin.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Yorum Kartı 1 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg relative">
            <div className="absolute top-0 left-0 -mt-6 ml-6"><QuoteIcon /></div>
            <p className="text-gray-700 italic mt-8">&ldquo;Hayatımın en güzel tatiliydi! Karadeniz turunda her şey mükemmeldi. Rehberimiz o kadar bilgiliydi ki... Teşekkürler Perla Paradise!&rdquo;</p>
            <div className="flex items-center mt-6">
              {/* <Image src="/avatars/avatar1.jpg" alt="Ayşe K." width={50} height={50} className="rounded-full" /> */}
              <div className="ml-0">
                <p className="font-bold text-gray-800">Ayşe K.</p>
                <p className="text-sm text-gray-500">Karadeniz Turu</p>
              </div>
            </div>
          </div>
          {/* Yorum Kartı 2 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg relative">
            <div className="absolute top-0 left-0 -mt-6 ml-6"><QuoteIcon /></div>
            <p className="text-gray-700 italic mt-8">&ldquo;Güneydoğu turu bir tarih ve lezzet şöleniydi. Organizasyon kusursuzdu. Herkese tavsiye ederim, kesinlikle tekrar geleceğim.&rdquo;</p>
            <div className="flex items-center mt-6">
              {/* <Image src="/avatars/avatar2.jpg" alt="Mehmet T." width={50} height={50} className="rounded-full" /> */}
              <div className="ml-0">
                <p className="font-bold text-gray-800">Mehmet T.</p>
                <p className="text-sm text-gray-500">Güneydoğu Turu</p>
              </div>
            </div>
          </div>
          {/* Yorum Kartı 3 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg relative">
            <div className="absolute top-0 left-0 -mt-6 ml-6"><QuoteIcon /></div>
            <p className="text-gray-700 italic mt-8">&ldquo;Eşimle birlikte katıldığımız Kapadokya turu rüya gibiydi. Balon turu deneyimi unutulmazdı. Her şey için teşekkürler.&rdquo;</p>
            <div className="flex items-center mt-6">
              {/* <Image src="/avatars/avatar3.jpg" alt="Zeynep ve Ali" width={50} height={50} className="rounded-full" /> */}
              <div className="ml-0">
                <p className="font-bold text-gray-800">Zeynep ve Ali</p>
                <p className="text-sm text-gray-500">Kapadokya Turu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;