import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";


function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route />
        </Routes>

    )
}

export default Routing;