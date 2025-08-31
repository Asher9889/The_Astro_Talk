import { axios } from "@/api";
import { useEffect } from "react"
import { toast } from "sonner";
import cm from "../../assets/cm.png";
import { useDispatch } from "react-redux"
import { setUser } from "@/store/slices";

const Dashboard = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
       getLoggedInUser()
    }, []);

    async function getLoggedInUser (){
        const res = await axios.get("/auth/me")
        if(res.status !== 200){
            toast.error(res.data.message, {id: "auth"})
        }
        dispatch(setUser(res.data.data));
        localStorage.setItem("user", JSON.stringify(res.data.data));
    }

    return (
        <div>
            <img src={cm} alt="" />
        </div>
    )
}

export default Dashboard;