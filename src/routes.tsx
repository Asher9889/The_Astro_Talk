import { Routes, Route } from "react-router-dom";
import { Home, KundliGenerate } from "./pages";
// import {CertifiedAstrologer} from "./pages";
// import { CertifiedAstrologer } from "./pages/CertifiedAstrolog
import { CertifiedAstrologer } from "./pages/CertifiedAstrologer/CertifiedAstrologer";
import { ConsultationForm } from "./components";
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

    }
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


