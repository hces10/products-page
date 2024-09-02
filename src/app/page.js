"use client"

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import DataDisplay from "@/components/ListItem";
import { useState } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('balls');

  const selectCategory = (category) => {
    setActiveCategory(category)
  }

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
