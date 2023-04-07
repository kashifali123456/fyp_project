import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Register from "../Components/Register";
import SignIn from "../Components/SignIn";
import Team from "../Components/Team";
import Dashboard from "../Pages/Dashboard";
import OnlineOrder from "../Components/OnlineOrder";
import ForgetPassword from "../Components/ForgetPassword";
import Profile from "../Components/Profile";
import Tutorial from "../Components/Tutorial";
import Cart from "../Pages/Cart";

const Routers = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/tutorial" exact element={<Tutorial />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/team" exact element={<Team />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/onlineorder" exact element={<OnlineOrder />} />
          <Route path="/forget" exact element={<ForgetPassword />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/Cart" exact element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Routers;
