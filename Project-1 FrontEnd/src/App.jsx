import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Project/Pages/Home/Home";
import About from "./Project/Pages/About/About";
import News from "./Project/Pages/News/News";
import Contact from "./Project/Pages/Contact/Contact";
import OurTeam from "./Project/Pages/About/OurTeam";
import Cart from "./Project/Pages/Cart/Cart";
import Shop from "./Project/Pages/Shop/Shop";
import Error from "./Project/Pages/Error/Error";
import Router from "./Project/Router/Router";
import Cheakout from "./Project/Pages/CheckOut/Checkout";
import Sidebar from "./Project/Components/Sidebar/Sidebar";
import Profile from "./Project/Components/Profile/Profile";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <About /> */}
      {/* <News /> */}
      {/* <Contact /> */}
      {/* <Shop />  */}
      {/* <Cart /> */}
      {/* <Error /> */}
      <Router />
      {/* <Login/> */}
      {/* <Cheakout /> */}
      {/* <LogIn /> */}
      {/* <CreateAcc /> */}
      {/* <Sidebar /> */}
      {/* <Profile /> */}
    </>
  );
}

export default App;
