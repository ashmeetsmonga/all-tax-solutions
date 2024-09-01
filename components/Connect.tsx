import React from "react";
import ConnectForm from "./ConnectForm";

const Connect = () => {
  return (
    <section className="w-full py-20 px-10 md:px-20 flex justify-center bg-red-500">
      <div className="w-full xl:w-3/4">
        <h2 className="text-center text-5xl font-bold tracking-tight text-white">Get In Touch With Us Today</h2>
        <p className="text-center text-xl text-white mt-4">Fill out the form below to book a consultation or ask any questions.</p>
        <ConnectForm />
      </div>
    </section>
  );
};

export default Connect;
