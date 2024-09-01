import { CircleUserRound, NotebookPen, SquareLibrary, Users } from "lucide-react";
import React from "react";

const KeyServices = () => {
  return (
    <section className="w-full py-20 px-10 md:px-20 flex justify-center bg-red-100">
      <div className="w-full xl:w-3/4">
        <h2 className="w-full text-center text-5xl font-bold tracking-tight text-red-500">Key Services</h2>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          <div className="rounded-lg bg-white p-8 flex flex-col">
            <div className="flex justify-center w-full">
              <CircleUserRound className="w-20 h-20 mb-4 text-red-500" />
            </div>
            <h3 className="text-3xl text-red-500 text-center font-bold">Individual Tax Services</h3>
            <p className="text-lg flex-grow flex items-center">Tailored solutions for individuals, ensuring every deduction is accounted for and every credit is maximized.</p>
          </div>
          <div className="rounded-lg bg-white p-8 flex flex-col">
            <div className="flex justify-center w-full">
              <Users className="w-20 h-20 mb-4 text-red-500" />
            </div>
            <h3 className="text-3xl text-red-500 text-center font-bold">Small Business Tax Filing Services</h3>
            <p className="mt-4 text-lg flex-grow flex items-center">
              Expert tax services for small businesses, from sole proprietors to LLCs. We handle everything from bookkeeping to filing, so you can focus on growing your business.
            </p>
          </div>
          <div className="rounded-lg bg-white p-8 flex flex-col">
            <div className="flex justify-center w-full">
              <NotebookPen className="w-20 h-20 mb-4 text-red-500" />
            </div>
            <h3 className="text-3xl text-red-500 text-center font-bold">Tax Planning & Advisory</h3>
            <p className="mt-4 text-lg flex-grow flex items-center">
              Strategic tax planning to minimize your liabilities and maximize your savings. Our advisory services are available year-round, not just during tax season.
            </p>
          </div>
          <div className="rounded-lg bg-white p-8 flex flex-col">
            <div className="flex justify-center w-full">
              <SquareLibrary className="w-20 h-20 mb-4 text-red-500" />
            </div>
            <h3 className="text-3xl text-red-500 text-center font-bold">Audit Support</h3>
            <p className="mt-4 text-lg flex-grow flex items-center">If you’re facing an audit, we’re here to provide expert representation and support.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyServices;
