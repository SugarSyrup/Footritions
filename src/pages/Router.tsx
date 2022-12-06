import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "../components/template/Header";
import Footer from "../components/template/Footer";

import Home from "./HomePage";
import Join from "./Join";
import Login from "./Login";
import User from "./User";
import Analysis from "./Analysis";
import Result from "./Result";

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
            <Footer />
        </BrowserRouter>
    );
};

export default Router;