import React from "react";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import RecipeDetail from "./RecipeDetail";
import { AnimatePresence } from "framer-motion";
const Pages = () => {
    const location = useLocation();
    // console.log(location);
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine/:type" element={<Cuisine />} />
                <Route path="/searched/:search" element={<Searched />} />
                <Route path="/recipe/:name" element={<RecipeDetail />}></Route>
            </Routes>
        </AnimatePresence>
    );
};

export default Pages;
