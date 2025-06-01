import { NavLink } from "react-router-dom";
import tla from "../../assets/TLA_01.png"
const navMenu = ["Chat with Astrologer", "Astrological Matchmaking" , "Horoscope" , "Tarot Card Reader", "Punchang", "Blog"]

const Header = ()=>{
    return (
        <header className="w-full bg-(--color-header-background)">
            <nav className="w-full flex flex-row justify-between items-center max-w-7xl mx-auto text-sm">
                <button className="w-22 cursor-pointer">
                    <img src={tla} alt="TLA Logo" />
                </button>
                <div className="flex flex-row gap-4 md:gap-6 lg:gap-8 item-center justify-center  text-(--color-text-white)">
                    {navMenu.map((menu) => (
                        <NavLink className={`hover:text-(--color-text-hover) hover:scale-99 transition-all duration-300`} to={`/${menu}`}>{menu}</NavLink>
                    ))}
                </div>
                <div className="flex flex-row justify-center items-center gap-4">
                    <select name="lnguage" id="" className="bg-zinc-300 p-2 rounded-md cursor-pointer">
                        <option value="hi">Hindi</option>
                        <option value="en">English</option>
                    </select>
                    <button className="bg-(--color-yellow-300) px-6 py-2 rounded-md cursor-pointer">Login</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;