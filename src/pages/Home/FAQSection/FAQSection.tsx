import { FaChevronDown, FaArrowRight } from 'react-icons/fa';

const FAQSection = () => {
  return (
    <div className="flex flex-col border-1 border-yellow-300 md:flex-row justify-between items-center bg-(--color-header-background) px-6 md:px-20  my-24 rounded-t-4xl py-26">
      {/* Left side - Decorative */}
      <div className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        {/* Astrology graphic background */}
        <div className=" w-[350px] h-[400px] bg-yellow-400 rounded-xl flex flex-col items-center justify-center shadow-lg">
          
          <img className="drop-shadow-2xl" src="https://images.unsplash.com/flagged/photo-1574787929769-db45db9e4f10?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        {/* Additional Astrology Icons Floating */}
        {/* <div className="absolute -left-6 top-10 animate-pulse">
          <img src="/images/planet1.png" className="w-6 h-6" alt="planet1" />
        </div>
        <div className="absolute right-0 bottom-8 animate-bounce">
          <img src="/images/star1.png" className="w-4 h-4" alt="star1" />
        </div> */}
      </div>

      {/* Right side - FAQ */}
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl text-yellow-300  font-bold mb-6">Frequently Asked Questions</h2>

        {/* Open FAQ Item */}
        <div className="bg-gray-100 p-6 rounded-2xl border-l-4 border-yellow-500 shadow-sm">
          <div className="flex justify-between items-center">
            <a href="#" className="text-indigo-800 font-semibold">How does the platform work?</a>
            <FaChevronDown className="text-indigo-800" />
          </div>
          <p className="mt-3 text-gray-600 text-sm">
            Our platform connects users with experienced astrologers for personalized consultations through chat or calls. Users can recharge their wallets to pay for these services.
          </p>
        </div>

        {/* Collapsed Items */}
        {[
          "Can I try it for free?",
          "How do I recharge my wallet?",
          "How are payments processed for chats and calls with astrologers?"
        ].map((question, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded-2xl flex justify-between items-center hover:shadow-md transition-all duration-300 ease-in-out">
            <p className="font-medium">{question}</p>
            <FaArrowRight />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;


