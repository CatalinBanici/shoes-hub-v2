import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

export default function RootPage() {
  return (
    <div className="font-roboto font-regular m-auto flex max-w-[1800px] flex-col ">
      <header className="fixed z-10 flex w-full max-w-[1800px] flex-col bg-white sm:bg-transparent ">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
