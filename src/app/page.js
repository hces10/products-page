"use client"

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import DataDisplay from "@/components/ListItem";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <div className="flex w-full justify-center">
        <Header />
      </div>
      <DataDisplay />
      <Footer />
    </div>
  );
}
