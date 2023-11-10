import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, fetchcart } from "../../../Redux/features/cartSlice";
import axios from "axios";
import { BE_URL } from "../../../config";
import { Button } from "reactstrap";

export default function Products() {
  let [allProduct, setAllProduct] = useState([]);

  const products = useSelector((state) => state?.productReducer?.product);
  // console.log("🚀 ~ file: Products.jsx:9 ~ Products ~ products:", products)

  const dispatch = useDispatch();

  const cartList = useSelector((state) => state?.cartReducer?.cart) || [];

  function handlerAddCart(e) {
    // console.log("🚀 ~ file: Products.jsx:21 ~ handlerAddCart ~ e:", e);
    let dataArr = [...cartList];
    // console.log(
    //   "🚀 ~ file: Products.jsx:22 ~ handlerAddCart ~ dataArr:",
    //   dataArr
    // );

    let find = cartList?.findIndex((item) => item?.id === e._id);
    console.log("🚀 ~ file: Products.jsx:26 ~ handlerAddCart ~ find:", find);
    if (find === -1) {
      dataArr?.push({ productId: e?._id, count: 1 });
    } else {
      dataArr[find].count += 1;
    }

    setAllProduct([...products])

    axios({
      method: "post",
      url: `${BE_URL}/cart/create`,
      data: { products: dataArr },
      headers: {
        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => {
        dispatch(fetchcart());

        // console.log("🚀 ~ file: Products.jsx:25 ~ handlerAddCart ~ res:", res);
      })
      .catch((err) => {
        // console.log("🚀 ~ file: Products.jsx:27 ~ handlerAddCart ~ err:", err);
        console.log(err);
      });
  }

  useEffect(() => {
    setAllProduct(products);
  }, [products]);

  return (
    <div>
      {/* <!-- products --> */}
      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-filters">
                <ul>
                  <li className="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".strawberry">Strawberry</li>
                  <li data-filter=".berry">Berry</li>
                  <li data-filter=".lemon">Lemon</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row product-lists">
            {allProduct?.map((e) => {
              return (
                <div className="col-lg-4 col-md-6 text-center berry">
                  <div className="single-product-item">
                    <div className="product-image">
                      <a href="single-product.html">
                        <img src={e.thumbnail} alt="" />
                      </a>
                    </div>
                    <h3>{e.title}</h3>
                    <p className="product-price">
                      <span>Per Kg</span> ${e.price}
                    </p>
                    <Button
                      className="cart-btn"
                      onClick={() => handlerAddCart(e)}
                    >
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="pagination-wrap">
                <ul>
                  <li>
                    <a href="#">Prev</a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a className="active" href="#">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">Next</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end products --> */}
    </div>
  );
}
