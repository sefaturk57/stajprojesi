Modern Turizm Acentesi Web Sitesi
Bu proje, Next.js, TypeScript ve Tailwind CSS kullanılarak geliştirilmiş, modern ve interaktif bir turizm acentesi web sitesidir. Kullanıcıların interaktif bir harita üzerinden tur seçebilmesi, kişiselleştirilmiş tur önerileri alabilmesi ve tüm tur detaylarını kolayca inceleyebilmesi hedeflenmiştir.
<img width="1879" height="868" alt="Ekran görüntüsü 2025-08-21 145126" src="https://github.com/user-attachments/assets/a8e2cd36-dd77-4fa2-9fc2-b19664ff93cd" />
Proje Özeti
Bu web sitesi, statik broşür sitelerinin ötesine geçerek kullanıcıya dinamik ve etkileşimli bir deneyim sunmayı amaçlamaktadır. Projenin temel özellikleri arasında, lokasyon bazlı tur keşfi için interaktif Türkiye haritası, kararsız gezginler için kişiselleştirilmiş öneriler sunan "Tur Sihirbazı" ve sayfa kaydırıldıkça ortaya çıkan modern animasyonlar bulunmaktadır. Proje, tamamen mobil uyumlu (responsive) olarak tasarlanmıştır.

Kullanılan Teknolojiler
Framework: Next.js (App Router)

Dil: TypeScript

Stilendirme: Tailwind CSS

Animasyon: react-awesome-reveal, react-parallax

Harita: turkey-map-react

Deployment (Yayınlama): Vercel

Proje Özellikleri
İnteraktif Türkiye Haritası: Kullanıcılar haritadan bir şehir seçerek o bölgedeki turları anında listeleyebilir.

Tur Sihirbazı: Kullanıcıların seyahat tipi ve süresi gibi tercihlerine göre kişiselleştirilmiş tur önerileri sunar.

Dinamik Sayfalar: Tur kategorileri ve tur detay sayfaları, Next.js'in dinamik rota özelliği kullanılarak otomatik olarak oluşturulur.

Modern Arayüz: Parallax efekti, Glassmorphism (cam efekti) ve "scroll-reveal" animasyonları ile zenginleştirilmiş bir kullanıcı deneyimi.

Mobil Uyumlu Tasarım: Site, tüm cihazlarda (mobil, tablet, masaüstü) kusursuz bir şekilde çalışır.

SEO Optimizasyonu: sitemap.ts ve robots.txt dosyaları ile arama motorları için optimize edilmiştir.

Kurulum ve Çalıştırma
Bu projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

Repoyu Klonlayın:

Bash

git clone https://github.com/sefaturk57/stajprojesi.git
Proje Klasörüne Gidin:

Bash

cd stajprojesi
Gerekli Paketleri Yükleyin:

Bash

npm install
Geliştirme Sunucusunu Başlatın:

Bash

npm run dev
Siteyi tarayıcınızda http://localhost:3000 adresinde görebilirsiniz.

Ekran Görüntüleri ve Kod Örnekleri

1. Akıllı Navbar (components/Navbar.tsx)
Sayfa kaydırıldığında görünümü değişen dinamik Navbar.
<img width="1326" height="938" alt="Ekran görüntüsü 2025-08-21 145740" src="https://github.com/user-attachments/assets/b92de750-8dae-47e2-b2ec-ec2cb89d194e" />
<img width="1123" height="839" alt="Ekran görüntüsü 2025-08-21 145748" src="https://github.com/user-attachments/assets/b7f80a27-c508-43b6-a2bd-a85fcdcb0500" />

2. İnteraktif Harita Mantığı (app/page.tsx)
Haritadan gelen veriye göre turları filtreleyen state yönetimi.
<img width="1212" height="951" alt="Ekran görüntüsü 2025-08-21 145901" src="https://github.com/user-attachments/assets/c6dc7b23-7550-4df4-89fe-c585a7f02619" />
<img width="1377" height="926" alt="Ekran görüntüsü 2025-08-21 145912" src="https://github.com/user-attachments/assets/05d86cba-d95c-4a25-a67d-4c9b60076f75" />
<img width="1728" height="943" alt="Ekran görüntüsü 2025-08-21 145926" src="https://github.com/user-attachments/assets/5da149b5-9fac-4aa5-8758-8db4682cc1df" />

3. Tur Detay Sayfası (app/turlar/detay/[id]/page.tsx)
Next.js'in generateStaticParams fonksiyonu ile statik olarak üretilen dinamik sayfalar.
<img width="1433" height="949" alt="Ekran görüntüsü 2025-08-21 150057" src="https://github.com/user-attachments/assets/eadf8b68-df31-4539-b629-0f8e293b0590" />
<img width="1520" height="930" alt="Ekran görüntüsü 2025-08-21 150109" src="https://github.com/user-attachments/assets/8de17add-af30-40c7-b75f-910bc74e61ac" />








