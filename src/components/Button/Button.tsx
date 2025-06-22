import { useNavigate } from "react-router-dom";

const Button = ({className, content, navigate}:{className?: string, content:string, navigate?: string})=>{
    const navigatee = useNavigate();
    return (
        <button onClick={()=> navigatee(`/${navigate}`)} className={`px-6 py-2 text-sm font-bold rounded-md cursor-pointer transition-all duration-300 ${className || ""}`}>
            {content}
        </button>
    )
}

export default Button;