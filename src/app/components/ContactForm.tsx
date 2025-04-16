"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-emerald-200 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
          className="w-full px-4 py-2 rounded-md bg-blue-900/50 border border-emerald-500/20 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-emerald-200 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
          className="w-full px-4 py-2 rounded-md bg-blue-900/50 border border-emerald-500/20 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-emerald-200 mb-1"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          required
          className="w-full px-4 py-2 rounded-md bg-blue-900/50 border border-emerald-500/20 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-emerald-200 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          rows={5}
          className="w-full px-4 py-2 rounded-md bg-blue-900/50 border border-emerald-500/20 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 px-6 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium rounded-md hover:from-emerald-600 hover:to-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-emerald-400 text-center">
          Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-center">
          Failed to send message. Please try again.
        </p>
      )}
    </motion.form>
  );
} 