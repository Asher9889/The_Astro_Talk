import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { ConsultationForm } from "./components";

const routesData = [
    {
        name: "/",
        element: <Home />
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