import { Routes, Route } from "react-router-dom";
import { Blog, Dashboard, Home, KundliGenerate, TalkToAstrologer } from "./pages";
// import {CertifiedAstrologer} from "./pages";
// import { CertifiedAstrologer } from "./pages/CertifiedAstrolog
import { CertifiedAstrologer } from "./pages/CertifiedAstrologer/CertifiedAstrologer";
import { BlogDetail, ConsultationForm, SignUpForm } from "./components";
import Login from "./pages/Login/Login";

const routesData = [
    {
        name: "/",
        element: <Home />
    },
    {
        name: "/register",
        element: <Login />
    },
    {
        name: "/sign-up",
        element: <SignUpForm />
    },
    {
        name: "/generate-kundli",
        element: <KundliGenerate />
    },
    {
        name: "/certified_astro",
        element: <CertifiedAstrologer />
    },
    {
        name: "/chat_with_astrologer", 
        element: <ConsultationForm />
    },
    {
        name: "/talk_to_astrologer",
        element: <TalkToAstrologer />
    },
    {
        name: "/astrology-insight",
        element: <Blog />
    },
    {
        name: "/astrology-insight/:id",
        element: <BlogDetail />
    },
    {
        name: "/dashboard",
        element: <Dashboard />
    },
]

function Routing() {
    return (
        <Routes>
            {routesData.map((routesData,_) => (

            <Route  path={routesData.name} element={routesData.element} />
            ))}
           
        </Routes>

    )
}

export default Routing;


