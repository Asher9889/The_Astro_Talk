import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";

export function useAuthGuard() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state:RootState) => state.auth.user); // from redux slice

  useEffect(() => {
    const isLoggedIn = user ? true : false; // !!user

    if (!isLoggedIn && location.pathname.startsWith("/dashboard")) {
      // not logged in → redirect to login
      navigate("/register", { replace: true });
    }

    if (isLoggedIn && (location.pathname === "/login" || location.pathname === "/register")) {
      // already logged in → redirect to dashboard
      navigate("/dashboard", { replace: true });
    }
  }, [user, location.pathname, navigate]);
}
