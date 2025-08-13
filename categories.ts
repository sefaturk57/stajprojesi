// data/categories.ts

export interface Category {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export const categoriesData: Category[] = [
  {
    id: 1,
    title: "Günübirlik Turlar",
    description: "Hafta sonu için hızlı bir kaçamak.",
    imageUrl: "/categories/gunubirlik.jpg",
    link: "/turlar/gunubirlik",
  },
  {
    id: 2,
    title: "Kültür & Tarih",
    description: "Medeniyetlerin izini sürün.",
    imageUrl: "/categories/kultur.jpg",
    link: "/turlar/kultur-tarih",
  },
  {
    id: 3,
    title: "Doğa & Macera",
    description: "Yeşilin ve adrenalinin kalbine.",
    imageUrl: "/categories/doga.jpg",
    link: "/turlar/doga-macera",
  },
  {
    id: 4,
    title: "Tatil & Plaj",
    description: "Deniz, kum ve güneşin keyfi.",
    imageUrl: "/categories/tatil.jpg",
    link: "/turlar/tatil",
  },
];