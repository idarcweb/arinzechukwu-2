"use client";

import emailjs from "emailjs-com";
import { useState } from "react";
import { BiError } from "react-icons/bi";
import { BsInfoCircle, BsSend } from "react-icons/bs";

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsLoading(false);
        setStatusMessage("Message sent successfully!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setStatusMessage("Failed to send message. Please try again.");
        setIsLoading(false);
      });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={sendEmail}
      className="flex flex-col gap-6 font-Mont w-full lg:md:w-[60%] lg:"
    >
      {statusMessage && (
        <p className={`${statusMessage != "Message sent successfully!" && "text-red-400/70"} flex items-center gap-3 font-mono text-liteport/70`}>
          {statusMessage != "Message sent successfully!" ? <BiError size={28} className="text-red-300"/> : <BsInfoCircle size={28} className="text-port" />}
          {statusMessage}
        </p>
      )}
      <div className="flex md:flex-col items-center gap-10 md:gap-6 transition-all duration-700">
        <input
          required
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
          className="bg-transparent z-50 text-white/50 border-2 border-liteport/30 placeholder:text-white/50 rounded-lg py-2 px-3 outline-none w-full"
        />

        <input
          required
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          className="bg-transparent text-white/50 border-2 border-liteport/30  placeholder:text-white/50 rounded-lg py-2 px-3 outline-none w-full"
        />
      </div>
      <input
        required
        name="subject"
        type="text"
        value={formData.subject}
        placeholder="Subject"
        onChange={handleChange}
        className="bg-transparent text-white/50 border-2 border-liteport/30  placeholder:text-white/50 rounded-lg py-2 px-3 outline-none w-full"
      />
      <div>
        <textarea
          required
          name="message"
          value={formData.message}
          placeholder="Write me a message"
          rows={7}
          cols={5}
          onChange={handleChange}
          className="bg-transparent text-white/50 border-2 border-liteport/30 placeholder:text-white/50 rounded-lg py-2 px-3 outline-none w-full tracking-wide leading-relaxed"
        />
      </div>

      <button
        type="submit"
        className={`${isLoading && 'animate-pulse duration-1000 transition-opacity'} bg-port-black/70 border-2 border-liteport/30 hover:border-transparent text-liteport/50 flex items-center justify-between py-3 font-normal hover:text-black/90 hover:bg-liteport/30  text-center rounded-md w-40 p-1 
        px-2 transition-all duration-500`}
      >
        {isLoading ? "Sending..." : "Send Message"}
        <BsSend />
      </button>
    </form>
  );
};

export default ContactForm;
