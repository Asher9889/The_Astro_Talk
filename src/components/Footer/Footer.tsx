import privatee from "../../assets/private-icon.svg"
import verified from "../../assets/verified.svg"
import secure from "../../assets/secure.svg"
import logo from "../../assets/TLA_01.png"
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-(--color-saddle-brown)  pt-12  pb-6 px-4 md:px-20 text-gray-800">
      {/* Top Section - Icons + Buttons */}
      <div className="bg-(--color-golden-yellow) rounded-t-3xl p-6 md:p-10 mb-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        {/* Icons Row */}
        <div className="flex justify-around w-full md:w-2/3 text-center">
          {[
            { icon: privatee, label: 'Private & Confidential' },
            { icon: verified, label: 'Verified Astrologers' },
            { icon: secure, label: 'Secure Payments' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 text-sm">
              <img src={item.icon} alt={item.label} className="w-8 h-8" />
              <span className="font-semibold">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Buttons Row */}
        <div className="mt-6 md:mt-0 md:ml-6 flex space-x-4 bg-black p-2 rounded-full ">
          <button className="bg-(--color-golden-yellow) hover:bg-yellow-300 px-4 py-2 rounded-full font-semibold text-sm">
            💬 Chat with Astrologer
          </button>
          <button className="bg-(--color-golden-yellow) hover:bg-yellow-300 px-4 py-2 rounded-full font-semibold text-sm">
            📞 Talk to Astrologer
          </button>
        </div>
      </div>

      {/* Middle Section - About, Links, Contact */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-(--color-text-white)">
        {/* About */}
        <div className="md:w-1/2">
          <h3 className="text-lg font-bold mb-3">About TheAstroLife</h3>
          <p className="text-sm text-zinc-200 leading-relaxed mb-4">
            TheAstroLife is the best astrology website for <a href="#" className="text-blue-600 underline">online astrology consultation</a> and predictions, connecting you with the best astrologers from India to gain insights into your future through Kundli predictions...
          </p>

          <div className="flex items-center bg-yellow-400 px-4 py rounded-xl w-max space-x-2 mb-4">
            <img src={logo} alt="AstroManch Logo" className="w-16 h-16" />
            <span className="font-bold text-(--color-header-background)">TheAstroLife</span>
          </div>

          {/* Social */}
          <div className="flex items-center space-x-4">
            <span>Follow us</span>
            <FaFacebookF className="cursor-pointer text-xl text-blue-600" />
            <FaInstagram className="cursor-pointer text-pink-500 text-2xl" />
            <FaYoutube className="cursor-pointer text-red-600 text-2xl" />
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-md font-bold mb-3 flex items-center">
            <span className="text-yellow-500 text-xl">●</span>&nbsp;Useful Links
          </h4>
          <ul className="text-sm space-y-1">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Astrologer Registration</li>
            <li>Terms & Condition</li>
            <li>Support</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-md font-bold mb-3 flex items-center">
            <span className="text-yellow-500 text-xl">●</span>&nbsp;Get in Touch
          </h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-center">
              <MdEmail className="mr-2 text-yellow-600" /> support@theastrotalk.com
            </li>
            <li className="flex items-center">
              <MdPhone className="mr-2 text-yellow-600" /> 9889840089
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t pt-4">
        © Copyright 2025. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
