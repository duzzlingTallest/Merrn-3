import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";
import { BE_URL } from "../../../../config";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../Redux/features/productSlice";
import { useEffect } from "react";

export default function Form(props) {
  const initialFormData = {
    title: "",
    price: "",
    discountPercentage: "",
    availableStock: "",
    thumbnail: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    let normalToken = JSON.parse(token);
    axios({
      method: "post",
      url: `${BE_URL}/product/create`,
      data: formData,
      headers: {
        authorization: `Bearer ${normalToken}`,
        // authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => {
        console.log("🚀 ~ file: Form.jsx:33 ~ onSubmit ~ res:", res);

        dispatch(addProduct(res?.data?.data));
      })
      .catch((err) => {
        toast.error(err);
      });

    // Reset the form input fields to their initial state (empty values)
    setFormData(initialFormData);
    navigate("/products");
    console.log({ ...formData, setFormData });
    props.toggle();
  };

  //props update
  useEffect(() => {
    setFormData(props.data);
  }, [props.data]);

  const handelerUpdate = () => {
    axios({
      method: "put",
      url: `${BE_URL}/product/update/${formData._id}`,
      data: formData,
      headers: {
        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => {
        console.log("🚀 ~ file: Form.jsx:69 ~ handelerUpdate ~ res:", res);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <>
      <div className="mt-[100px] ml-[60px] mr-[400px] ">
        {/* <!-- General Form Elements --> */}
        <Modal
          isOpen={props.modal}
          toggle={props.toggle}
          {...props}
        >
          <ModalBody>
            <form className=" text-black text-xl">
              <div className="row mb-3 flex justify-center ">
                <label
                  for="inputEmail"
                  className=" col-form-label flex justify-center "
                >
                  Product Name :
                </label>
                <div className="col-sm-6 ">
                  <input
                    type="name"
                    className="form-control"
                    onChange={(e) =>
                      setFormData({ ...formData, title: e?.target?.value })
                    }
                    value={formData.title}
                  />
                </div>
              </div>
              <div className="row mb-3 flex justify-center ">
                <label
                  for="inputPassword"
                  className=" col-form-label flex justify-center "
                >
                  Price:
                </label>
                <div className="col-sm-6">
                  <input
                    className="form-control"
                    onChange={(e) =>
                      setFormData({ ...formData, price: e?.target?.value })
                    }
                    value={formData.price}
                  />
                </div>
              </div>
              <div className="row mb-3 flex justify-center ">
                <label
                  for="inputPassword"
                  className=" col-form-label flex justify-center "
                >
                  Discount Percentage:
                </label>
                <div className="col-sm-6">
                  <input
                    className="form-control"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        discountPercentage: e?.target?.value,
                      })
                    }
                    value={formData.discountPercentage}
                  />
                </div>
              </div>
              <div className="row mb-3 flex justify-center ">
                <label
                  for="inputNumber"
                  className=" col-form-label flex justify-center "
                >
                  QTY
                </label>
                <div className="col-sm-6">
                  <input
                    type="number"
                    className="form-control ml-[65px]"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        availableStock: e?.target?.value,
                      })
                    }
                    value={formData.availableStock}
                  />
                </div>
              </div>
              <div className="row mb-3 flex justify-center ">
                <label
                  for="inputNumber"
                  className=" col-form-label flex justify-center "
                >
                  IMG
                </label>
                <div className="col-sm-6">
                  <input
                    className="form-control"
                    type="text"
                    id="formFile"
                    onChange={(e) =>
                      setFormData({ ...formData, thumbnail: e?.target?.value })
                    }
                    value={formData.thumbnail}
                  />
                </div>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="btn btn-primary  mt-5 ml-[170px] "
                  onClick={(e) => onSubmit(e)}
                >
                  Submit
                </button>
                <button
                  type="submit"
                  className="btn btn-primary  mt-5  "
                  onClick={(e) => handelerUpdate(e)}
                >
                  Update
                </button>
              </div>
            </form>
          </ModalBody>
        </Modal>
        {/* <!-- End General Form Elements --> */}
      </div>
    </>
  );
}
