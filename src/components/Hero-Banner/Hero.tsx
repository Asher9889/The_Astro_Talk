import ContentWrapper from "../content-wrapper/ContentWrapper";
import SparklesText from "../Sparkles-Text/SparklesText";

ContentWrapper

const Hero = ()=>{
    return (
        <section>
            <div className="h-[400px] bg-yellow-900 bg-opacity-90 flex flex-col justify-center items-center text-(--color-text-white)">
                <h1 className="text-5xl font-bold ">
                <SparklesText sparklesCount={10}>
                    Chat with Astrologers Now
                </SparklesText>
                </h1>
                <h3 className="font-medium opacity-70">Find clarity on love, career, marriage, and more from Vedic Experts.</h3>
                <button className="bg-(--color-text-hover) text-(--color-text-black) px-8 py-2 rounded-full mt-6 font-medium cursor-pointer">Chat with Astrologer</button>
            </div>
        </section>
    )
}

export default Hero;