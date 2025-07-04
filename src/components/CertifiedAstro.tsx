import React from "react";
import { useNavigate } from "react-router-dom";

const AstrologerCTA = () => {
  const navigate = useNavigate();

  const handleClick = (response: "yes" | "no") => {
    if (response === "yes") {
      navigate("/book-astrologer"); // Adjust route as per your app
    } else {
      navigate("/dashboard"); // Adjust route for No action
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-(--color-text-primary) bg-white">
      <div className="backdrop-blur-xl rounded-2xl shadow-2xl p-8 max-w-xl w-full border border-(--color-border) text-center">
        <h2 className="text-2xl font-bold mb-6">
          Would you like a certified astrologer to explain your report and answer your life questions?
        </h2>
        <div className="flex justify-center gap-6">
          <button
            onClick={() => handleClick("yes")}
            className="px-8 py-2 rounded-md text-(--color-button-text) bg-(--color-text-secondary) hover:bg-(--color-text-primary) font-bold transition duration-300 shadow-md hover:scale-105 cursor-pointer"
          >
            Yes
          </button>
          <button
            onClick={() => handleClick("no")}
            className="px-8 py-2 rounded-md text-(--color-button-text) bg-(--color-link) hover:bg-(--color-button-secondary) font-bold transition duration-300 shadow-md hover:scale-105 cursor-pointer"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default AstrologerCTA;
