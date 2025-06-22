// import { Hero } from "../../components";
import { ContentWrapper } from "../../components/index";
// import OnlineAstrologers from "./Online-Astrologers/OnlineAstrologers";
// import FAQSection from "./FAQSection/FAQSection";
// import LatestBlogs from "./Blogs/LatestBlogs";
// import ServicesSection from "./Services/ServicesSection";
import CTA from "./CTA-Page/CTA";
// import ContentWrapper from "../../components/content-wrapper/ContentWrapper";


const Home = () => {
    return (
        <>
            <ContentWrapper>

                {/* <Hero /> */}
                <div className="min-h-[calc(100vh-100px)] flex justify-center items-center">
                    <CTA />
                </div>
                {/* <ServicesSection />
                <OnlineAstrologers />
                <FAQSection /> */}
                {/* <Corousal /> */}
                {/* <LatestBlogs /> */}

            </ContentWrapper>
        </>
    )
}

export default Home;