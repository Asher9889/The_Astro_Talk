import React, { useState } from "react";
import { motion } from "framer-motion";
import astroImg from "../../assets/astro.avif";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  birthTime: string;
  pob: string;
  problemType: string;
}

const TalkToAstroForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    birthTime: "",
    pob: "",
    problemType: "",
  });

  const problemOptions = [
    "Life prediction based on birth details",
    "Career guidance",
    "Marriage delay",
    "Love marriage",
    "Career problem",
    "Health-related astrological concerns",
    "Financial or business growth queries",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div
      className="flex items-center justify-center max-h-screen h-[80vh] min-h-2/3 px-2"
    >
      <motion.div
        className="max-w-5xl w-full bg-white shadow-xl rounded-xl overflow-hidden grid md:grid-cols-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Left Image */}
        <div className="hidden md:block">
          <img
            src={astroImg}
            alt="Astrology"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="p-6 md:p-8">
          <h2
            className="text-2xl font-bold mb-4 text-center"
            style={{ color: "var(--color-text-primary)" }}
          >
            Talk to Astrologer
          </h2>
          <form className="space-y-3" onSubmit={handleSubmit}>
            {/* First + Last Name */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1"
                  style={{ borderColor: "var(--color-border)" }}
                />
              </div>
              <div>
                <label className="block text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1"
                  style={{ borderColor: "var(--color-border)" }}
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1"
                  style={{ borderColor: "var(--color-border)" }}
                />
              </div>
              <div>
                <label className="block text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1"
                  style={{ borderColor: "var(--color-border)" }}
                />
              </div>
            </div>

            {/* DOB + Birth Time + POB */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>
                  DOB
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1"
                  style={{ borderColor: "var(--color-border)" }}
                />
              </div>
              <div>
                <label className="block text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>
                  Birth Time
                </label>
                <input
                  type="time"
                  name="birthTime"
                  value={formData.birthTime}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1"
                  style={{ borderColor: "var(--color-border)" }}
                />
              </div>
              <div>
                <label className="block text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>
                  Place of Birth
                </label>
                <input
                  type="text"
                  name="pob"
                  value={formData.pob}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1"
                  style={{ borderColor: "var(--color-border)" }}
                />
              </div>
            </div>

            {/* Problem Type dropdown */}
            <div>
              <label className="block text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>
                Problem Type
              </label>
              <motion.select
                name="problemType"
                value={formData.problemType}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.15 }}
                className="w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-1"
                style={{ borderColor: "var(--color-border)", color: "var(--color-text-primary)" }}
                required
              >
                <option value="" disabled>
                  Select problem type...
                </option>
                {problemOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </motion.select>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-2 rounded-md text-sm font-semibold shadow"
              style={{
                backgroundColor: "var(--color-button-primary)",
                color: "var(--color-button-text)",
              }}
            >
              Submit
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default TalkToAstroForm;
