import { Routes, Route } from "react-router-dom";
import HomeConsumption from "./HomeConsumption";
import Home from "./Home";
import Food from "./Food";
import Results from "./Results";
import Tips from "./Tips";
import Transportation from "./Transportation";
import General from "./General";

function RouteComponent(props) {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transportation" element={<Transportation />} />
            <Route path="/food" element={<Food />} />
            <Route path="/home" element={<HomeConsumption />} />
            <Route path="/general" element={<General />} />
            <Route path="/results" element={<Results />} />
            <Route path="/tips" element={<Tips />} />
          </Routes>
    )   
}

export default RouteComponent;