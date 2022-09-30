import { Routes, Route } from "react-router";
import { Home } from "./src/assets/pages/home/Home"

export function Router() {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
     );
}

