import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, logout } from "../store/slices";
import { axios } from "@/api";

function useInitAuth() {
  const dispatch = useDispatch();

  useEffect(() => {
    const initAuth = async () => {
      try {
        // Try fetching user with existing cookies
        const res = await axios.get("/auth/me", { withCredentials: true });
        dispatch(setUser(res.data.data));
      } catch (err: any) {
        try {
          // If /me failed, attempt refresh
          await axios.post("/auth/refresh", {}, { withCredentials: true });

          // Retry /me after refresh
          const meRes = await axios.get("/auth/me", { withCredentials: true });
          dispatch(setUser(meRes.data.data));
        } catch (refreshErr) {
          // refresh also failed -> force logout
          dispatch(logout());
        }
      }
    };

    initAuth();
  }, [dispatch]);
}


export default useInitAuth;
