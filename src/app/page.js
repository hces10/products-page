"use client"

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import DataDisplay from "@/components/ListItem";
import { useState } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(2);

  const selectCategory = (category) => {
    setActiveCategory(category)
  }

  return (
    <div className="min-h-screen flex flex-col w-full">
      <main className="flex-grow">
      <div className="flex w-full justify-center">
        <Header active={activeCategory} selectCategory={selectCategory} />
      </div>
      <DataDisplay active={activeCategory} />
      </main>
      <Footer />
    </div>
  );
}
