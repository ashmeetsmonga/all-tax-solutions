"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import { Textarea } from "./ui/textarea";

const ConnectForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const checkErrors = () => {
    let errors = false;
    if (phone.length < 10) {
      toast.error("Invalid Phone Number");
      errors = true;
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !phone || !email || !query) {
      toast.error("Please fill all details");
      return;
    }
    const errors = checkErrors();
    if (errors) return;
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

    const toastId = toast.loading("Submitting query");
    try {
      const { data } = await axios.post("https://script.google.com/macros/s/AKfycbzgdeNALlq63iz9NJPM9zKz_LzV-gfL5Egt19Uwgm1RYwLcLPq07oAdMp95UUG9gbdcbA/exec", formData);
      toast.success("Query submitted successfully", { id: toastId });
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong, please try later", { id: toastId });
    }
  };

  return (
    <form className="w-full flex flex-col items-center gap-8 mt-10" onSubmit={(e) => handleSubmit(e)}>
      <Input value={name} onChange={(e) => setName(e.target.value)} className="max-w-[750px] p-6 placeholder:text-red-300 text-lg bg-white text-red-500" placeholder="Name *" />
      <Input
        value={phone}
        onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/gi, ""))}
        className="max-w-[750px] p-6 placeholder:text-red-300 text-lg bg-white text-red-500"
        placeholder="Phone No. *"
      />
      <Input value={email} onChange={(e) => setEmail(e.target.value)} className="max-w-[750px] p-6 placeholder:text-red-300 text-lg bg-white text-red-500" placeholder="Email *" />
      <Textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        rows={5}
        className="max-w-[750px] p-6 placeholder:text-red-300 text-lg bg-white text-red-500"
        placeholder="Type your query here..."
      />
      <Button className=" bg-white text-red-500 text-xl px-8 py-6 hover:bg-gray-200">Submit</Button>
    </form>
  );
};

export default ConnectForm;
