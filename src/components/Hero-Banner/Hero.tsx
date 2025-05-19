import ContentWrapper from "../content-wrapper/ContentWrapper";
import { Meteors, RainbowButton } from "../index";
import SparklesText from "../Sparkles-Text/SparklesText";

ContentWrapper

const Hero = () => {
    return (
        <section>
            <Meteors />
            <div className="h-[400px] bg-(--color-yellow-900) bg-opacity-90 flex flex-col justify-center items-center text-(--color-text-white)">
                <h1 className="text-5xl font-bold ">
                    <SparklesText sparklesCount={10}>
                        Chat with Astrologers Now
                    </SparklesText>
                </h1>
                <h3 className="font-medium opacity-70">Find clarity on love, career, marriage, and more from Vedic Experts.</h3>
                <RainbowButton  variant="outline" size="lg" className="mt-2">
                   Chat with Astrologer
                </RainbowButton>
            </div>
        </section>
    )
}

export default Hero;