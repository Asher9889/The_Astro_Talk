import { Routes, Route } from "react-router-dom";
import { Home, KundliGenerate } from "./pages";
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