import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="lg:pt-[72px] w-full min-h-[60vh] flex justify-center items-center">
      <div className="w-3/4 flex flex-col-reverse lg:flex-row lg:justify-between h-full items-center">
        <div className="mb-10 md:mb-0 ">
          <h1 className="text-7xl xl:text-8xl text-center lg:text-left font-bold tracking-tighter text-red-500">All Tax Solutions</h1>
          <p className="text-2xl lg:text-3xl tracking-tighter font-thin text-black text-center lg:text-left">Beyond Ordinary Tax Solutions</p>
          <div className="w-full flex justify-center lg:w-fit lg:block">
            <Button className="mt-10 bg-red-500 text-white text-xl px-8 py-6 hover:bg-red-700">Contact Us</Button>
          </div>
        </div>
        <div className="w-[300px] h-[300px] lg:w-[480px] lg:h-[480px] flex items-center">
          <img src="/images/hero.jpg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
