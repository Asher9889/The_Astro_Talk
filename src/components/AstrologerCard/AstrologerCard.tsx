import { FaStar, FaRegCommentDots, FaPhoneAlt } from "react-icons/fa";

const AstrologerCard = () => {
  return (
    <div className="flex items-center p-4 bg-white rounded-2xl shadow-md w-[320px] space-x-4 hover:scale-110 transition-all cursor-pointer">
      {/* Profile Image */}
      <img
        src="https://plus.unsplash.com/premium_photo-1691839307627-85132e035ad1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image URL
        alt="Acharya Aarti G"
        className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
      />

      {/* Info Section */}
      <div className="flex-1">
        <h2 className="font-semibold text-lg text-black">Acharya Aarti G</h2>
        <p className="text-sm text-gray-500">Vedic</p>

        <div className="flex items-center space-x-2 mt-1">
          <span className="text-red-600 font-semibold text-sm">FREE</span>
          <span className="line-through text-green-600 text-sm">₹18/min</span>
        </div>

        {/* Rating */}
        <div className="flex items-center mt-1">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-lg" />
          ))}
          <FaStar className="text-gray-300 text-sm" />
        </div>
      </div>

      {/* Icons */}
      <div className="flex flex-col items-center space-y-2">
        <button className="w-8 h-8 rounded-full bg-indigo-800 text-white flex items-center justify-center">
          <FaRegCommentDots className="text-sm" />
        </button>
        <button className="w-8 h-8 rounded-full bg-yellow-400 text-black flex items-center justify-center">
          <FaPhoneAlt className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default AstrologerCard;
