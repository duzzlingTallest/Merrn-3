import React, { useEffect } from "react";

import Products from "./Products";
import { useDispatch } from "react-redux";
import { fetchProduct } from "../../../Redux/features/productSlice";

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("----");
    dispatch(fetchProduct());
  }, []);

  return (
    <>
      <body>
        {/* <!-- breadcrumb-section --> */}
        <div className="breadcrumb-section breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <div className="breadcrumb-text">
                  <p>Fresh and Organic</p>
                  <h1>Shop</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end breadcrumb section --> */}

        <Products />
      </body>
    </>
  );
}
