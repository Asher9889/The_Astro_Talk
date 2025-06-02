import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is TheLifeAstro?",
    answer:
      "TheLifeAstro is a startup astrology platform that blends real astrologers with AI-powered astrology to provide personalized guidance for users of all age groups.",
  },
  {
    question: "How does the blend of real and AI astrologers work?",
    answer:
      "Users can consult experienced human astrologers for nuanced readings or use AI astrologers for instant, data-driven predictions. The platform allows integration of both for comprehensive advice.",
  },
  {
    question: "Is TheLifeAstro suitable for all age groups?",
    answer:
      "Yes, TheLifeAstro is designed to be accessible and user-friendly for everyone from Gen Z to senior citizens.",
  },
  {
    question: "What types of services does TheLifeAstro offer?",
    answer:
      "The platform offers free basic reports and live sessions, as well as paid premium consultations with real astrologers and advanced AI readings.",
  },
  {
    question: "Are the consultations confidential?",
    answer:
      "Yes, TheLifeAstro prioritizes user privacy and confidentiality in all consultations and data handling.",
  },
  {
    question: "In which languages are services available?",
    answer:
      "TheLifeAstro supports multiple languages to cater to a diverse user base.",
  },
  {
    question: "Can I access TheLifeAstro services on mobile?",
    answer:
      "Yes, TheLifeAstro is accessible via both app and website, offering chat, call, and live session options.",
  },
  {
    question: "How accurate are astrology readings?",
    answer:
      "Astrology readings use smart tech based on classic principles to give quick and consistent insights. For a more personal vibe, you can always connect with an astrologer.",
  },
  {
    question: "Does TheLifeAstro provide educational resources?",
    answer:
      "Yes, the platform offers blogs, articles, and live events to help users understand astrology better.",
  },
  {
    question: "How do I get started with TheLifeAstro?",
    answer:
      "Simply sign up on the platform’s website, choose your preferred astrologer, and start your personalized astrology journey.",
  },
];

const TheLifeAstroFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index:any ) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-[#78350f] to-[#a16207] py-12 my-26 px-4 sm:px-6 lg:px-16 rounded-xl shadow-inner">
      <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">
        FAQs about <span className="text-yellow-500">TheLifeAstro</span>
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow border border-yellow-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-5 py-4 focus:outline-none"
            >
              <span className="text-yellow-900 font-medium text-lg">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-yellow-600" />
              ) : (
                <ChevronDown className="text-yellow-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-gray-700 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TheLifeAstroFAQ;
