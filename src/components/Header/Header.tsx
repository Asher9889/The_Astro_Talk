import { NavLink, useNavigate } from "react-router-dom";
import tla from "../../assets/TLA_01.png";
import HeaderDropDown from "./HeaderDropDown";
import { toast } from "sonner";
import { axios } from "@/api";
import { logout } from "@/store/slices";
import { useDispatch } from "react-redux";

export interface IUser {
  fullName: string;
  email: string;
  phone: string;
  _id: string
}

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleLogout(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/logout");

      if (res.status !== 200) {
        toast.error(res.data.message);
        return;
      }
      dispatch(logout())
      toast.success(res.data.message);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Logout failed");
    }
  }

  return (

    <header className="relative h-[15vh] md:h-[10vh]  flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate("/")} className="w-22 cursor-pointer">
            <img src={tla} alt="TLA Logo" className="h-[60px] w-auto" />
          </button>
          <div className="sm:hidden">
            <button type="button" className="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
              <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
              <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
        <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <NavLink className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" to="/talk_to_astrologer">Talk to Astrologer</NavLink>
            <NavLink className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" to="/astrology-insight">Astrology Insight</NavLink>
            <HeaderDropDown handleLogout={handleLogout} />
          </div>
        </div>
      </nav>
    </header>

  );
};

export default Header;
