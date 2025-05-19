import Header from "../../components/Header/Header";
import { ConsultationForm, Corousal, Hero } from "../../components";
// import ContentWrapper from "../../components/content-wrapper/ContentWrapper";


const Home = () => {
    return (
        <>
            <Header />
            {/* <ContentWrapper> */}
                <Hero />
            {/* </ContentWrapper> */}
            <Corousal />
            <ConsultationForm />
        </>
    )
}

export default Home;