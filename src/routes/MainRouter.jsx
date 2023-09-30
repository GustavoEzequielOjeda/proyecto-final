import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Category from "../pages/Category"
import NavBarComponent from "../components/NavBarComponent/NavBarComponent"

const MainRouter = () =>{
    return(
        <Router>
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<Category />} />
            </Routes>
        </Router>
    )
}
export default MainRouter