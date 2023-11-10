import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import News from "../Pages/News/News";
import Contact from "../Pages/Contact/Contact";
import Shop from "../Pages/Shop/Shop";
import Error from "../Pages/Error/Error";
import Cart from "../Pages/Cart/Cart";
import Search from "../Pages/Search/Search";
import Checkout from "../Pages/CheckOut/Checkout";
import Login from "../Pages/Auth/Login/LogIn";
import CreateAcc from "../Pages/Auth/CreateAcc/SignUp";
import Forgot_pass from "../Pages/Auth/ForgotPass/Forgot_pass";
import { Provider } from "react-redux";
import { store } from "../../Redux/app/Store";
import { ToastContainer } from "react-toastify";
import Profile from "../Components/Profile/Profile";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Products from "../Pages/Admin/Product/Products";

export default function Router() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<Search />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createAcc" element={<CreateAcc />} />
            <Route path="/forgotPass" element={<Forgot_pass />} />
            <Route path="*" element={<Error />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Products />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </Provider>
    </>
  );
}
