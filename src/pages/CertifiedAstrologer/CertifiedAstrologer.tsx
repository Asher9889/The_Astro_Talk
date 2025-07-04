import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CertifiedAstrologer: React.FC = () => {
  const handlePayment = (action: "No" | "Yes") => {
    if (action === "No") {
      alert("Thanku for Visiting");
      return;
    }
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: 5999,
      currency: "INR",
      name: "Kundli Premium",
      description: "Premium Kundli Report",
      image: "https://yourlogo.png",
      handler: function (_: any) {
        if (action === "Yes") {
          // const phoneNumber = "9305409769";
          // const message = encodeURIComponent(
          //   "Hello, I have completed the payment and want to connect with the astrologer."
          // );
          // window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
          const dummyUrl = "https://web.whatsapp.com/";
          window.location.href = dummyUrl;
        }
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9876543210",
      },
      notes: {
        kundliId: "user_kundli_123",
      },
      theme: {
        color: "#bc6c25",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="flex justify-center mb-30">
        <form className="border border-gray-600 rounded-lg w-[400px] p-8 bg-white shadow-lg">
          <h2 className="text-center text-lg font-bold mb-8 text-gray-800">
            Would you like a certified astrologer to explain your report and
            answer your life questions?
          </h2>

          <div className="flex justify-center gap-6">
            <div className="flex justify-center gap-30">
              <button
                onClick={() => handlePayment("Yes")}
                type="button"
                className={`px-6 py-2 text-sm font-bold rounded-md cursor-pointer transition-all duration-300 bg-(--color-button-primary) text-(--color-button-text) shadow-md hover:bg-opacity-90 hover:scale-105`}
              >
                Yes
              </button>

              <button
                onClick={() => handlePayment("No")}
                type="button"
                className={`px-6 py-2 text-sm font-bold rounded-md cursor-pointer transition-all duration-300 bg-(--color-text-secondary) text-(--color-button-text) shadow-md hover:bg-opacity-90 hover:scale-105`}
              >
                No
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
