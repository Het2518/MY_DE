import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx";
import Profile from "./Components/profile.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import { Contact } from './Components/ContactUs';

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
