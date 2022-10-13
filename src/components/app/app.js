import React from "react";
import { withBookstoreService } from "../hoc";
import { Routes, Route } from "react-router-dom";

import {HomePage, CartPage} from "../pages"

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>)
}

export default withBookstoreService()(App);