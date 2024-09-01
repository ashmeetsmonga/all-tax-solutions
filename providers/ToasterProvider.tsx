"use client";
import React from "react";
import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          backgroundColor: "#ef4444",
          color: "white",
        },
      }}
    />
  );
};

export default ToasterProvider;
