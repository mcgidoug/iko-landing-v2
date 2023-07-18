"use client";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";

export default function Home() {
  return (
    <div className="p-4 selection:bg-pink-500">
      <Navbar />
      <Header />
      <About />
    </div>
  );
}
