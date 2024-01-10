import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

export default function RootPage() {
  return (
    <div className="font-roboto font-regular m-auto flex max-w-[1800px] flex-col ">
      <header className="relative flex flex-col">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
