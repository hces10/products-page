"use client"

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import DataDisplay from "@/components/ListItem";
import { useState } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(19);

  const selectCategory = (category) => {
    console.log('category', category);
    setActiveCategory(category)
  }

  console.log('activeCategory', activeCategory);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <div className="flex w-full justify-center">
        <Header selectCategory={selectCategory} />
      </div>
      <DataDisplay active={activeCategory} />
      <Footer />
    </div>
  );
}
