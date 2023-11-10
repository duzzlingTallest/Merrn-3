import React, { useState } from "react";
import Form from "./Form";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../../../Redux/features/productSlice";
import { FileEdit, Trash2 } from "lucide-react";
import axios from "axios";
import { BE_URL } from "../../../../config";

export default function Products() {
  const [formModal, setFormModal] = useState(false);
  const [productData, setProductData] = useState([]);
  let [data, setData] = useState({}); // update
  let [index, setIndex] = useState();

  const dispatch = useDispatch();
  const formToggle = () => setFormModal(!formModal);

  const fetchData = useSelector((state) => state.productReducer.product);

  useEffect(() => {
    setProductData(fetchData);
  }, [fetchData]);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const deleteHandler = (e) => {
    axios({
      method: "delete",
      url: `${BE_URL}/product/delete/${e?._id}`,
      headers: {
        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    }).then((res) => {
      console.log("🚀 ~ file: Products.jsx:37 ~ deleteHandler ~ res:", res);
      dispatch(fetchProduct());
    });
  };

  const updateHandler = (e,i) => {
    setData(e);
    // console.log("🚀 ~ setIndex:", index); // log can be delay
    setIndex(i);
    formToggle();
  };

  return (
    <>
      {/* <h1> index is {index} </h1> */}
      <div className="mt-[100px] ml-[400px] mr-[400px]">
        <Form modal={formModal} toggle={formToggle} data={data} />
        <h1 className=" text-blue-900 flex justify-center font-serif">
          Add A New Product
        </h1>
        <hr />
        <div>
          <button
            className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            onClick={() => formToggle()}
          >
            Add Product
          </button>
        </div>

        <div>
          <h1 className="mt-10">Data Table</h1>
          <div className="tableDiv">
            <Table className="mt-10" striped bordered hover>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>IMG</th>
                  <th>Title</th>
                  <th>qty</th>
                  <th>Price</th>
                  <th>Discount Percentage</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productData?.map?.((ele, i) => {
                  return (
                    <tr key={ele._id}>
                      <td>{i + 1}</td>
                      <td>
                        <img src={ele?.thumbnail} alt="" />
                      </td>
                      <td>{ele.title}</td>
                      <td>{ele.qty}</td>
                      <td>{ele.price}</td>
                      <td>{ele.discountPercentage}</td>
                      <td>{ele.availableStock}</td>
                      <td className="flex">
                        <Trash2
                          type="submit"
                          onClick={() => deleteHandler(ele)}
                          className="mr-4"
                        />
                        <FileEdit
                          type="submit"
                          onClick={() => updateHandler(ele, i)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

// map((e,i)=>{
//   print(e)
// })
