import { useNavigate } from "react-router-dom";

const Button = ({className, content, navigate}:{className?: string, content:string, navigate?: string | undefined})=>{
    const navigatee = useNavigate();

    function navigation (){
        if(!navigate) return;
        navigatee(`/${navigate}`)
    }
    return (
        <button onClick={navigation} className={`px-6 py-2 text-sm font-bold rounded-md cursor-pointer transition-all duration-300 ${className || ""}`}>
            {content}
        </button>
    )
}

export default Button;