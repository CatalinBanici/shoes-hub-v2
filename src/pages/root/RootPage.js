import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

export default function RootPage() {
  return (
    <div className="font-regular relative m-auto flex max-w-[1800px] flex-col font-roboto">
      <header className="fixed z-10 flex w-full max-w-[1800px] flex-col bg-white sm:bg-transparent ">
        <Header />
      </header>
      <main className="mb-[70px]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
