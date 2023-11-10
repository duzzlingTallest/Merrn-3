import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "./slider.css";
import { NavLink } from "react-router-dom";

export default function Slider() {
  return (
    <>
      {/* <!-- home page slider --> */}
      <div className="homepage-slider">
        {/* <!-- single home slider --> */}

        <AwesomeSlider className="full-width-slider">
          <div className="single-homepage-slider homepage-bg-1">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                  <div className="hero-text">
                    <div className="hero-text-tablecell">
                      <p className="subtitle">Fresh & Organic</p>
                      <h1>Delicious Seasonal Fruits</h1>
                      <div className="hero-btns">
                        <NavLink to="/shop" className="bordered-btn">
                          Fruit Collection
                        </NavLink>
                        <NavLink to="/contact" className="bordered-btn">
                          Contact Us
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-homepage-slider homepage-bg-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1 text-center">
                  <div className="hero-text">
                    <div className="hero-text-tablecell">
                      <p className="subtitle">Fresh Everyday</p>
                      <h1>100% Organic Collection</h1>
                      <div className="hero-btns">
                        <NavLink to="/shop" className="boxed-btn">
                          Visit Shop
                        </NavLink>
                        <NavLink to="/contact" className="bordered-btn">
                          Contact Us
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-homepage-slider homepage-bg-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1 text-right">
                  <div className="hero-text">
                    <div className="hero-text-tablecell">
                      <p className="subtitle">Mega Sale Going On!</p>
                      <h1>Get December Discount</h1>
                      <div className="hero-btns">
                        <NavLink to="/shop" className="boxed-btn">
                          Visit Shop
                        </NavLink>
                        <NavLink to="/contact" className="bordered-btn">
                          Contact Us
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AwesomeSlider>
      </div>
      {/* <!-- end home page slider --> */}
    </>
  );
}
