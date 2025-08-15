import { useNavigate } from "react-router-dom";
import tla from "../../assets/TLA_01.png";
import ContentWrapper from "../content-wrapper/ContentWrapper";

const Header = () => {
  const navigate = useNavigate();

  return (
  <header className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
  <ContentWrapper>
    <nav className="w-full flex flex-row justify-between items-center max-w-7xl mx-auto text-sm h-[100px]">
      
      {/* Logo */}
      <button onClick={() => navigate("/")} className="w-22 cursor-pointer">
        <img src={tla} alt="TLA Logo" className="h-[80px] w-auto" />
      </button>

      {/* Navigation Menu */}
      <ul className="flex flex-row gap-16 justify-center items-center">
        <li>
          <button
            onClick={() => navigate("/talk_to_astrologer")}
            className="text-md cursor-pointer text-(--color-text-primary) hover:scale-[0.98] transition-all"
          >
            Talk to an Astrologer
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/astrology-insight")}
            className="cursor-pointer text-(--color-text-primary) hover:scale-[0.98] transition-all"
          >
            Astrology Insight
          </button>
        </li>
      </ul>

      {/* Login Button */}
      <div className="flex flex-row justify-center items-center">
        <button
          onClick={() => navigate("/register")}
          className="font-semibold bg-(--color-button-primary) text-(--color-button-text) px-6 py-2 rounded-md cursor-pointer"
        >
          Login
        </button>
      </div>
    </nav>
  </ContentWrapper>
</header>

  );
};

export default Header;
