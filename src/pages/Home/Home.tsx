import Header from "../../components/Header/Header";
import { ConsultationForm, Corousal, Footer, Hero } from "../../components";
import { ContentWrapper } from "../../components/index";
import OnlineAstrologers from "./Online-Astrologers/OnlineAstrologers";
import FAQSection from "./FAQSection/FAQSection";
import LatestBlogs from "./Blogs/LatestBlogs";

// import ContentWrapper from "../../components/content-wrapper/ContentWrapper";


const Home = () => {
    return (
        <>
            <Header />
            <ContentWrapper>
                <Hero />
                <ConsultationForm />
                <OnlineAstrologers />
                <FAQSection />
                <Corousal />
                <LatestBlogs />
                <Footer />
            </ContentWrapper>
        </>
    )
}

export default Home;