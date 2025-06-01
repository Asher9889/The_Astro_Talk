import type { ReactNode } from "react"

interface IProps {
    children: ReactNode; // reactnode means react can render anything:  JSX,String,Number,Boolean,Array f ReactNodes, fragments, OtherComponent
    className?: string;
}

const ContentWrapper = ({children, className = ""}:IProps)=>{
    return (
        <main className={`max-w-7xl mx-auto ${className}`}>
            {children}
        </main>
    )
}

export default ContentWrapper;