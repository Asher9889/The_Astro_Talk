import {   Hero } from "../../components";
import { ContentWrapper } from "../../components/index";
import OnlineAstrologers from "./Online-Astrologers/OnlineAstrologers";
import FAQSection from "./FAQSection/FAQSection";
import LatestBlogs from "./Blogs/LatestBlogs";
import ServicesSection from "./Services/ServicesSection";

// import ContentWrapper from "../../components/content-wrapper/ContentWrapper";


const Home = () => {
    return (
        <>

            <ContentWrapper>
                <Hero />
                <ServicesSection />
                <OnlineAstrologers />
                <FAQSection />
                {/* <Corousal /> */}
                <LatestBlogs />

            </ContentWrapper>
        </>
    )
}

export default Home;