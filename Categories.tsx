import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categoriesData } from '../data/categories';

const Categories = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-800">İlgi Alanına Göre Keşfet</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">Sadece nereye gideceğinizi değil, nasıl bir macera yaşayacağınızı da seçin.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoriesData.map((category) => (
            <Link href={category.link} key={category.id}>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-transform duration-300">
                {/* Arka Plan Resmi */}
                <Image
                  src={category.imageUrl}
                  alt={category.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                {/* Siyah degrade katman */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                {/* Yazı İçeriği */}
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-3xl font-bold">{category.title}</h3>
                  <p className="text-lg opacity-90">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;