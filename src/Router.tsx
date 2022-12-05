import {BrowserRouter, Routes, Route} from "react-router-dom";

// import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/home";
import Join from "./pages/Join";
import Login from "./pages/Login";
import User from "./pages/User";
import Analysis from "./pages/Analysis";
import Result from "./pages/Result";

function Router(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/user" element={<User />} />
                <Route path="/analysis" element={<Analysis />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;