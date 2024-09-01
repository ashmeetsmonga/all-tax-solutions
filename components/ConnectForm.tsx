"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";

const ConnectForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    const date = new Date();
    const dateString = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    const timeString = `${date.getHours()}:${date.getMinutes()}`;
    formData.append("Name", name);
    formData.append("Phone", phone);
    formData.append("Email", email);
    formData.append("Query", query);
    formData.append("Date", dateString);
    formData.append("Time", timeString);

    try {
      const { data } = await axios.post("https://script.google.com/macros/s/AKfycbzgdeNALlq63iz9NJPM9zKz_LzV-gfL5Egt19Uwgm1RYwLcLPq07oAdMp95UUG9gbdcbA/exec", formData);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className="w-full flex flex-col items-center gap-8 mt-10" onSubmit={(e) => handleSubmit(e)}>
      <Input value={name} onChange={(e) => setName(e.target.value)} className="max-w-[750px] p-6 placeholder:text-red-300 text-lg bg-white text-red-500" placeholder="Name *" />
      <Input value={phone} onChange={(e) => setPhone(e.target.value)} className="max-w-[750px] p-6 placeholder:text-red-300 text-lg bg-white text-red-500" placeholder="Phone No. *" />
      <Input value={email} onChange={(e) => setEmail(e.target.value)} className="max-w-[750px] p-6 placeholder:text-red-300 text-lg bg-white text-red-500" placeholder="Email *" />
      <Input value={query} onChange={(e) => setQuery(e.target.value)} className="max-w-[750px] p-6 placeholder:text-red-300 text-lg bg-white text-red-500" placeholder="Query *" />
      <Button className=" bg-white text-red-500 text-xl px-8 py-6">Submit</Button>
    </form>
  );
};

export default ConnectForm;
