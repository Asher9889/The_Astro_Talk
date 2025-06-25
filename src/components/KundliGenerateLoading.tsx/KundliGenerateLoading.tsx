import { useEffect, useState } from "react";

const steps = [
  "📥 Reading your details",
  "🧠 Analysing your birth details",
  "📊 Generating your birth report",
  "🎉 Kundli is ready to be shared with you over Email or WhatsApp.",
];

export default function KundliGenerateLoading() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] text-[var(--color-text-primary)] relative overflow-hidden">
      {/* Background Soft Motion */}
      <div className="absolute w-[60vw] h-[60vw] bg-[var(--color-button-secondary)] opacity-30 rounded-full blur-3xl animate-pulse top-[-10%] left-[-20%]" />
      <div className="absolute w-[60vw] h-[60vw] bg-[var(--color-button-primary)] opacity-30 rounded-full blur-3xl animate-pulse-slow top-[40%] right-[-20%]" />

      <div className="bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl p-8 max-w-xl w-full border border-[var(--color-border)] z-10 transition-all duration-700 ease-in-out">
        <h2 className="text-2xl font-bold mb-6 text-center">🔮 Kundli Generation</h2>

        <ul className="space-y-6 relative">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`flex items-center gap-3 transition-all duration-700 ${
                index <= currentStep - 1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full ${
                  index === currentStep - 1 ? "bg-[var(--color-button-primary)] animate-pulse" : "bg-[var(--color-text-secondary)]"
                }`}
              />
              <span className="text-[var(--color-text-secondary)]">{step}</span>
            </li>
          ))}
        </ul>

        {/* Final Success Section */}
        {completed && (
          <div className="mt-10 text-center animate-fade-in">
            <div className="text-green-600 text-5xl mb-4 animate-bounce">✅</div>
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-text-primary)]">
              Your Kundli is ready!
            </h3>
            <div className="flex justify-center gap-4">
              <button className="px-5 py-2 rounded-lg text-[var(--color-button-text)] bg-[var(--color-button-primary)] hover:bg-opacity-90 transition duration-300 shadow-md hover:scale-105">
                📤 Share
              </button>
              <button className="px-5 py-2 rounded-lg text-[var(--color-button-text)] bg-[var(--color-button-secondary)] hover:bg-opacity-90 transition duration-300 shadow-md hover:scale-105">
                ⬇️ Download
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
