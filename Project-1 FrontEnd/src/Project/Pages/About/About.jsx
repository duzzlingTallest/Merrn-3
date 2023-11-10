import React from "react";
import Testimonail from "../../Components/Testimonail/Testimonail";



import WhyCom from "./WhyCom";
import OurTeam from "./OurTeam";

export default function About() {
  return (
    <>
      <>

        {/* <!-- breadcrumb-section --> */}
        <div className="breadcrumb-section breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <div className="breadcrumb-text">
                  <p>We sale fresh fruits</p>
                  <h1>About Us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end breadcrumb section --> */}

        {/* <!-- featured section --> */}
        <div className="feature-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="featured-text">
                  <h2 className="pb-3">
                    Why <span className="orange-text">Fruitkha</span>
                  </h2>
                  <div className="row">
                    {[1, 2, 3, 4].map((e) => (
                      <WhyCom />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end featured section --> */}

        {/* <!-- shop banner --> */}
        <section className="shop-banner">
          <div className="container">
            <h3>
              December sale is on! <br></br> with big{" "}
              <span className="orange-text">Discount...</span>
            </h3>
            <div className="sale-percent">
              <span>
                Sale! <br></br> Upto
              </span>
              50% <span>off</span>
            </div>
            <a href="shop.html" className="cart-btn btn-lg">
              Shop Now
            </a>
          </div>
        </section>
        {/* <!-- end shop banner --> */}

        <OurTeam />

        {/* <!-- testimonail-section --> */}
        <Testimonail />
        {/* <!-- end testimonail-section --> */}

        {/* <!-- footer --> */}

        {/* <!-- end footer --> */}
        
        {/* <!-- copyright --> */}

        {/* <!-- end copyright --> */}
      </>
    </>
  );
}
