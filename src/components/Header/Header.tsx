import { useNavigate } from "react-router-dom";
import tla from "../../assets/TLA_01.png"
import ContentWrapper from "../content-wrapper/ContentWrapper";
// const navMenu = ["Chat with Astrologer", "Astrological Matchmaking" , "Horoscope" , "Tarot Card Reader", "Punchang", "Blog"]

const Header = ()=>{
    const navigate = useNavigate();
    return (
        <header className="w-full bg-(--color-white-primary) h-[100px] py-0 my-0">
            <ContentWrapper>
            <nav className="w-full flex flex-row justify-between items-center max-w-7xl mx-auto text-sm">
                <button className="w-22 cursor-pointer">
                    <img onClick={()=> navigate("/")} src={tla} alt="TLA Logo" />
                </button>
                {/* <div className="flex flex-row gap-4 md:gap-6 lg:gap-8 item-center justify-center  text-(--color-text-white)">
                    {navMenu.map((menu) => (
                        <NavLink className={`hover:text-(--color-text-hover) hover:scale-99 transition-all duration-300`} to={`/${menu.toLowerCase().split(" ").join("_")}`}>{menu}</NavLink>
                    ))}
                </div> */}
                <div className="flex flex-row justify-center items-center gap-4">
                    {/* <select name="lnguage" id="" className="bg-zinc-300 p-2 rounded-md cursor-pointer">
                        <option value="hi">Hindi</option>
                        <option value="en">English</option>
                    </select> */}
                    <button className="font-semibold  bg-(--color-button-primary) text-(--color-button-text) px-6 py-2 rounded-md cursor-pointer">Login</button>
                </div>
            </nav>
        </ContentWrapper>
        </header>
    )
}

export default Header;