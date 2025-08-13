import Link from 'next/link';
import Image from 'next/image'; // Image komponentini import ediyoruz
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-12 px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sol Taraf: Logo ve Açıklama */}
          <div>
            {/* H3 BAŞLIĞI YERİNE LOGO GELDİ */}
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Perla Paradise Logosu"
                width={180}
                height={50}
              />
            </Link>
            <p className="mt-4 text-gray-400">Hayallerinizdeki yolculuk için doğru adrestesiniz. Türkiye&apos;nin eşsiz güzelliklerini misafirleriyle buluşturan köklü bir seyahat acentasıdır.</p>

          </div>
          {/* Orta: Hızlı Linkler */}
          <div>
            <h4 className="text-lg font-semibold text-white">Hızlı Linkler</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/turlar" className="hover:text-blue-400 transition-colors">Turlarımız</Link></li>
              <li><Link href="/hakkimizda" className="hover:text-blue-400 transition-colors">Hakkımızda</Link></li>
              <li><Link href="/iletisim" className="hover:text-blue-400 transition-colors">İletişim</Link></li>
            </ul>
          </div>
          {/* Sağ Taraf: İletişim Bilgileri */}
          <div>
            <h4 className="text-lg font-semibold text-white">Bize Ulaşın</h4>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li className="flex items-start"><span className="font-bold mr-2 mt-1">Adres:</span> <span>Tepecik mahallesi Cevdet hoca caddesi No:11/4, İzmit 41100</span></li>
              <li className="flex items-center"><span className="font-bold mr-2">Mobil:</span> <a href="tel:+905331327967" className="hover:text-white">0533 132 79 67</a></li>
              <li className="flex items-center"><span className="font-bold mr-2">Ofis:</span> <a href="tel:+902623226767" className="hover:text-white">0262 322 67 67</a></li>
              <li className="flex items-center"><span className="font-bold mr-2">Email:</span> <a href="mailto:info@perlaparadise.com" className="hover:text-white">info@perlaparadise.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Perla Paradise Seyahat Acentası. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;