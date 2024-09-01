"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [showBg, setShowBg] = useState(false);

  const changeBg = () => {
    if (window.scrollY > 10) setShowBg(true);
    else setShowBg(false);
  };

  useEffect(() => {
    changeBg();
    window.addEventListener("scroll", changeBg);
    return () => window.removeEventListener("scroll", changeBg);
  });

  return (
    <nav className={`hidden lg:flex w-full px-10 py-6 fixed justify-between items-center transition-all duration-150 bg-white text-red-500 ${showBg ? "shadow-xl" : ""}`}>
      <div className=" font-black text-4xl">
        <p>ATS</p>
      </div>
      <div className="flex gap-10 ">
        <p>Home</p>
        <p>Key Services</p>
        <p>About Us</p>
        <p>Connect</p>
      </div>
    </nav>
  );
};

export default Navbar;
