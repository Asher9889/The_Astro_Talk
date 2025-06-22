const Button = ({className, content}:{className?: string, content:string})=>{
    return (
        <button className={`px-6 py-2 text-sm font-bold rounded-md cursor-pointer transition-all duration-300 ${className || ""}`}>
            {content}
        </button>
    )
}

export default Button;