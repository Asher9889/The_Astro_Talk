import { useEffect, useState } from "react";
import "./index.css"; // 👈 You’ll create this CSS for extra animation

const steps = [
  "📥 Reading your details",
  "🧠 Analysing your birth details",
  "📊 Generating your birth report",
  "🎉 Congratulations! Your report is ready to be shared with you over Email or WhatsApp.",
];

export default function KundliGenerateLoading() {
  return (
    <div className="loader-bg">
      <div className="glass-card">
        <h2 className="loader-heading">🔮 Kundli Report Status</h2>
        <ol className="step-list">
          {steps.map((step, index) => (
            <Step key={index} index={index} text={step} />
          ))}
        </ol>
      </div>
    </div>
  );
}

function Step({ index, text }: { index: number; text: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), index * 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <li className="step-item animate-fade-slide-in">
      <div className="step-dot" />
      <span>{text}</span>
    </li>
  );
}
