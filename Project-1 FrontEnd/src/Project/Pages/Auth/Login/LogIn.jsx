import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { login } from "../../../../Redux/features/authSlice";
import { toast } from "react-toastify";
import { BE_URL } from "../../../../config";

function Login(props) {
  let [data, setData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    console.log("🚀 ~ file: LogIn.jsx:15 ~ getData ~ data:", data);
    axios
      .post(`${BE_URL}/user/signin`, data)
      .then((res) => {
        dispatch(login(res.data));
        console.log("--------------------------------");
        navigate("/");
        props.toggle();
        setData({ email: "", password: "" });
      })
      .catch((err) => {
        console.log("🚀 ~ file: LogIn.jsx:27 ~ onSubmit ~ err:", err);
        toast(err.message);
      });
  }

  // popUp

  const modalHandler = () => {
    props.toggle();
    props.setSignUpModal(true);
  };

  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle} {...props}>
        <ModalBody>
          <form className=" m-4">
            <div className="Auth-form-content">
              <h1>
                <img src="../../../../img/logo.png" alt="" />
              </h1>
              <h3 className="Auth-form-title mt-4">Welcome Back !!</h3>
              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control mt-1 p-2 ps-3"
                  placeholder="Enter email"
                  onChange={(e) => setData({ ...data, email: e.target.value })} //  email: ==> Key   e.target.value==> Value
                  value={data.email}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control mt-1 p-2 ps-3"
                  placeholder="Enter password"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  value={data.password}
                />
              </div>
              <div className="d-grid gap-2 mt-3 ">
                <button
                  onClick={(e) => onSubmit(e)}
                  type="submit"
                  className="btn btn-primary p-3 "
                >
                  Submit
                </button>
              </div>
              <div className="forgot-password text-right mt-2 d-flex justify-content-center">
                Forgot
                <NavLink to="/forgotPass" className="ms-2">
                  password?
                </NavLink>
              </div>
              <div className="forgot-password text-right mt-2 d-flex justify-content-center">
                New to Fruitkha
                <NavLink onClick={() => modalHandler()} className="ms-2">
                  Create an Account
                </NavLink>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Login;
