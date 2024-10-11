"use client";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const EMAILJS_PUBLIC_KEY = "pmXJL37bykI8md8n1";
const EMAILJS_SERVICE_ID = "service_aea0eqd";
const EMAILJS_TEMPLATE_ID = "template_ho5izkn";
const ADMIN_EMAIL = "okellykings220@gmail.com";

const ContactMePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: ADMIN_EMAIL,
        },
      );

      toast.success(
        "Thanks for reaching out. I would get back to you shortly !",
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Failed to send email:", error);
      if (error.status === 412) {
        toast.error(
          "There's an issue with the email service. Please try again later or contact the site administrator.",
        );
      } else {
        toast.error(
          error.text || "Failed to send message. Please try again later.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 10000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Contact Me
        </h2>
        <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            {["name", "email"].map((field) => (
              <div key={field} className="mb-6">
                <label
                  htmlFor={field}
                  className="block text-gray-300 mb-2 capitalize"
                >
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
            ))}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-gray-700 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition-colors duration-300 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMePage;
