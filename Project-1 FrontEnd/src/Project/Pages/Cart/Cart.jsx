import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchcart } from "../../../Redux/features/cartSlice";

export default function Cart() {
  const cartData = useSelector((state) => state?.cartReducer?.cart);
  // console.log("🚀 ~ file: Cart.jsx:7 ~ Cart ~ cartData:", cartData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcart());
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
                  <h1>Cart</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end breadcrumb section --> */}

        {/* <!-- cart --> */}
        <div className="cart-section mt-150 mb-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="cart-table-wrap">
                  <table className="cart-table">
                    <thead className="cart-table-head">
                      <tr className="table-head-row">
                        <th className="product-remove"></th>
                        <th className="product-image">Product Image</th>
                        <th className="product-name">Name</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-total">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartData?.map((c) => {
                        console.log("🚀 ~ file: Cart.jsx:55 ~ {cartData?.map ~ c:", c)
                        return (
                          <tr className="table-body-row">
                            <td className="product-remove">
                              <a href="#" onClick={() => removeItem()}>
                                <i className="far fa-window-close"></i>
                              </a>
                            </td>
                            <td className="product-image">
                              <img src={c.productId.thumbnail} alt="" />
                            </td>
                            <td className="product-name">{c.productId.title}</td>
                            <td className="product-price">${c.productId.price}</td>
                            <td className="product-quantity">
                              <input type="number" placeholder="0" />
                            </td>
                            <td className="product-total">{c.count}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="total-section">
                  <table className="total-table">
                    <thead className="total-table-head">
                      <tr className="table-total-row">
                        <th>Total</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="total-data">
                        <td>
                          <strong>Subtotal: </strong>
                        </td>
                        <td>$500</td>
                      </tr>
                      <tr className="total-data">
                        <td>
                          <strong>Shipping: </strong>
                        </td>
                        <td>$45</td>
                      </tr>
                      <tr className="total-data">
                        <td>
                          <strong>Total: </strong>
                        </td>
                        <td>$545</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="cart-buttons">
                    <NavLink to="/update" className="boxed-btn">
                      Update Cart
                    </NavLink>
                    <NavLink to="/checkout" className="boxed-btn black">
                      Check Out
                    </NavLink>
                  </div>
                </div>

                <div className="coupon-section">
                  <h3>Apply Coupon</h3>
                  <div className="coupon-form-wrap">
                    <form action="index.html">
                      <p>
                        <input type="text" placeholder="Coupon" />
                      </p>
                      <p>
                        <input type="submit" value="Apply" />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end cart --> */}
      </body>
    </>
  );
}
