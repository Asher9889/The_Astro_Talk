import { Button } from "../../../components";


const CTA = ()=>{
  
    return (
        <div className="py-8  text-center max-w-[90%] flex flex-col justify-center items-center gap-20 text-(--color-button-text)">
            <h1 className="text-3xl font-bold text-(--color-text-primary)">Would you like tob understand yourself better using Vedic Astro?</h1>
            <div  className="flex flex-row justify-center items-center gap-20">
                <Button navigate="register" className="bg-(--color-text-secondary) hover:bg-(--color-text-primary)  px-8 font-bold" content="Yes"/>
                <Button className="bg-(--color-link)  hover:bg-(--color-button-secondary) px-8" content="No"/>
            </div>
        </div>
    )
}

export default CTA;