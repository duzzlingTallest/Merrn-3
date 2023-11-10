import React, { useEffect, useState } from "react";
import "./Index.css";
import { NavLink } from "react-router-dom";
import LoginModal from "../../Pages/Auth/Login/LogIn";
import { useDispatch, useSelector } from "react-redux";
import { LogIn, UserCircle2 } from "lucide-react";
import { logout } from "../../../Redux/features/authSlice";
import Profile from "../Profile/Profile";
import SignUp from "../../Pages/Auth/CreateAcc/SignUp";
import { fetchcart } from "../../../Redux/features/cartSlice";

export default function Navbar() {
  const [navBackground, setNavBackground] = useState("transparent");
  const [modal, setModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100)
      setNavBackground("#051922"); // Change to desired color
    else setNavBackground("transparent"); // Change back to transparent
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcart());
  }, []); 

  const toggle = () => setModal(!modal);
  const profiletoggle = () => setProfileModal(!profileModal);
  const signUptoggle = () => setSignUpModal(!signUpModal);

  const userData = useSelector((state) => state?.auth?.user);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="static-nav top-header-area"
        id="sticker"
        style={{ backgroundColor: navBackground }}
      >
        <LoginModal
          modal={modal}
          toggle={toggle}
          setSignUpModal={setSignUpModal}
        />
        <Profile modal={profileModal} toggle={profiletoggle} />
        <SignUp modal={signUpModal} toggle={signUptoggle} setModal={setModal} />

        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="main-menu-wrap">
                {/* <!-- logo --> */}
                <div className="site-logo">
                  <NavLink to="/">
                    <img src="img/logo.png" alt="" />
                  </NavLink>
                </div>
                {/* <!-- logo --> */}
                <div>
                  {userData.userType === "admin" ? (
                    <div>
                      <nav className="main-menu">
                        <ul>
                          <li className="">
                            <NavLink
                              onClick={() => window.scrollTo(0, 0)}
                              to="/"
                            >
                              Dashboard
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={() => window.scrollTo(0, 0)}
                              to="/products"
                            >
                              Products
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={() => window.scrollTo(0, 0)}
                              to="/orders"
                            >
                              Orders
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={() => window.scrollTo(0, 0)}
                              to="/customers"
                            >
                              Customers
                            </NavLink>
                          </li>
                          <li>
                            <div className="header-icons">
                              <NavLink className="shopping-cart" to="/cart">
                                <i className="fas fa-shopping-cart"></i>
                              </NavLink>
                              <NavLink
                                className="mobile-hide search-bar-icon"
                                to="/search"
                              >
                                <i className="fas fa-search"></i>
                              </NavLink>
                              {JSON.stringify(userData) !== "{}" ? (
                                <li>
                                  <NavLink>
                                    <UserCircle2
                                      onClick={() => profiletoggle()}
                                    />
                                  </NavLink>
                                </li>
                              ) : (
                                <li>
                                  <NavLink onClick={toggle}>LOGIN</NavLink>
                                </li>
                              )}
                            </div>
                          </li>
                        </ul>
                      </nav>
                      <a className="mobile-show search-bar-icon" href="#">
                        <i className="fas fa-search"></i>
                      </a>
                    </div>
                  ) : (
                    <div>
                      <nav className="main-menu">
                        <ul>
                          <li className="">
                            <NavLink
                              onClick={() => window.scrollTo(0, 0)}
                              to="/"
                            >
                              Home
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={() => window.scrollTo(0, 0)}
                              to="/shop"
                            >
                              Shop
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={() => window.scrollTo(0, 0)}
                              to="/about"
                            >
                              About
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={() => window.scrollTo(0, 0)}
                              to="/news"
                            >
                              News
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={() => window.scrollTo(0, 0)}
                              to="/contact"
                            >
                              Contact
                            </NavLink>
                          </li>
                          <li>
                            <div className="header-icons">
                              <NavLink className="shopping-cart" to="/cart">
                                <i className="fas fa-shopping-cart"></i>
                              </NavLink>
                              <NavLink
                                className="mobile-hide search-bar-icon"
                                to="/search"
                              >
                                <i className="fas fa-search"></i>
                              </NavLink>
                              {JSON.stringify(userData) !== "{}" ? (
                                <li>
                                  <NavLink>
                                    <UserCircle2
                                      onClick={() => profiletoggle()}
                                    />
                                  </NavLink>
                                </li>
                              ) : (
                                <li>
                                  <NavLink onClick={toggle}>LOGIN</NavLink>
                                </li>
                              )}
                            </div>
                          </li>
                        </ul>
                      </nav>
                      <a className="mobile-show search-bar-icon" href="#">
                        <i className="fas fa-search"></i>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end header --> */}
    </>
  );
}
