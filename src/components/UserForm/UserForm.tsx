import React, { useState, useEffect } from "react";
import { Loading } from "../index";
// import { KundliGenerate } from "../../pages/index";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    pob: "",
    birthTime: "",

  });
  const navigate = useNavigate();

  // ❄️ Freeze scroll when loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // fallback on unmount
    };
  }, [loading]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // simulate submission
    setTimeout(() => {
      console.log("Submitted:", formData);
      setLoading(false);
      navigate("/generate-kundli")
    }, 3000);


  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* 💡 Form UI */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 rounded-lg shadow-lg z-10 bg-white"
        style={{
          border: "1px solid var(--color-border)",
          color: "var(--color-text-primary)",
        }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">📝 Personal Details</h2>

        {[
          { label: "First Name", name: "firstName", type: "text" },
          { label: "Last Name", name: "lastName", type: "text" },
          { label: "Email ID", name: "email", type: "email" },
          { label: "Phone Number", name: "phone", type: "tel" },
          { label: "Date of Birth", name: "dob", type: "date" },
          { label: "Place of Birth", name: "pob", type: "text" },
          { label: "Birth Time", name: "birthTime", type: "time" },
        ].map(({ label, name, type }) => (
          <div className="mb-4" key={name}>
            <label className="block text-sm mb-1" style={{ color: "var(--color-text-secondary)" }}>
              {label}
            </label>
            <input
              type={type}
              name={name}
              value={(formData as any)[name]}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text-primary)",
              }}
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full py-2 mt-4 rounded-md font-semibold shadow cursor-pointer"
          style={{
            backgroundColor: "var(--color-button-primary)",
            color: "var(--color-button-text)",
          }}
        >
          Submit
        </button>
      </form>

      {/* 🔄 Loading Overlay */}
      {loading && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: "linear-gradient(to bottom right, rgba(0, 123, 255, 0.1), rgba(0, 123, 255, 0.3))",
            backdropFilter: "blur(4px)",
          }}
        >
          <div className="p-4 rounded">
            <Loading />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserForm;
