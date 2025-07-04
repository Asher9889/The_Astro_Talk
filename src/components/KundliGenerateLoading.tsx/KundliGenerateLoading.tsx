import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const steps = [
  "📥 Reading your details",
  "🧠 Analysing your birth details",
  "📊 Generating your birth report",
  "🎉 Kundli is ready to be shared with you over Email or WhatsApp.",
];

export default function KundliGenerateLoading() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 2500); // Time between steps
      return () => clearTimeout(timer);
    } else {
      const done = setTimeout(() => {
        setCompleted(true);
      }, 1000); // Delay after last step
      return () => clearTimeout(done);
    }
  }, [currentStep]);

  const handlePayment = (action: "download" | "share") => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY, // Replace with your Razorpay test key
      amount: 49900, // ₹499 in paise
      currency: "INR",
      name: "Kundli Premium",
      description: "Premium Kundli Report",
      image: "https://yourlogo.png", // optional
      handler: function (_: any) {
        // ✅ Payment success
        if (action === "download") {
          alert("✅ Payment successful! Start downloading...");
          // TODO: Trigger download logic
        } else if (action === "share") {
          // alert("✅ Payment successful! Ready to share...");
          // TODO: Trigger share logic CertifiedAstrologer  navigate("/CertifiedAstrologer");
          // navigate("/CertifiedAstrologer");
          setTimeout(() => {
            navigate("/certified_astro");
          }, 2000);
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
        color: "#bc6c25", // Your button color
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen flex items-center justify-center  text-(--color-text-primary) relative overflow-hidden  ">
      {/* Background Soft Motion */}
      {/* <div className="absolute w-[60vw] h-[60vw] bg-(--color-button-secondary) opacity-30 rounded-full blur-3xl animate-pulse top-[-10%] left-[-20%]" /> */}
      {/* <div className="absolute w-[60vw] h-[60vw] bg-(--color-button-primary) opacity-30 rounded-full blur-3xl animate-pulse-slow top-[40%] right-[-20%]" /> */}

      <div className=" backdrop-blur-xl rounded-2xl shadow-2xl p-8 max-w-xl w-full border border-(--color-border) z-10 transition-all duration-700 ease-in-out">
        <h2 className="text-2xl font-bold mb-6 text-center text-(--color-text-primary)">
          🔮 Kundli Generation
        </h2>

        <ul className="space-y-6 relative">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`flex items-center gap-3 transition-all duration-700 ${
                index <= currentStep - 1
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-5"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full ${
                  index === currentStep - 1
                    ? "bg-(--color-button-primary) animate-pulse"
                    : "bg-(--color-text-secondary)"
                }`}
              />
              <span className="text-(--color-text-secondary)">{step}</span>
            </li>
          ))}
        </ul>

        {/* Final Success Section */}
        {completed && (
          <div className="mt-10 text-center animate-fade-in">
            <div className="text-green-600 text-5xl mb-4 animate-bounce">
              ✅
            </div>
            <h3 className="text-xl font-semibold mb-4 text-(--color-text-primary)">
              Your Kundli is ready!
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handlePayment("share")}
                className="px-5 py-2 rounded-lg text-(--color-button-text) bg-(--color-button-primary) hover:bg-opacity-90 transition duration-300 shadow-md hover:scale-105 cursor-pointer"
              >
                📤 Share
              </button>
              <button
                onClick={() => handlePayment("download")}
                className="px-5 py-2 rounded-lg text-(--color-button-text) bg-(--color-text-secondary) hover:bg-opacity-90 transition duration-300 shadow-md hover:scale-105 cursor-pointer"
              >
                ⬇️ Download
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
