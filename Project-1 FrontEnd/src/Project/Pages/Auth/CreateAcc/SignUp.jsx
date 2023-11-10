import React, { useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import "./LS.css";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBRadio,
} from "mdb-react-ui-kit";

import Select from "react-select";
import { Modal, ModalBody } from "reactstrap";
import { BE_URL } from "../../../../config";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { login } from "../../../../Redux/features/authSlice";

const options = [
  { value: "Gujarat", label: "Gujarat" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Rajsthan", label: "Rajsthan" },
];
const options2 = [
  { value: "Surat", label: "Surat" },
  { value: "Mumbai", label: "Mumbai" },
  { value: "Jaipur", label: "Jaipur" },
];

export default function SignUp(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    pass: "",
    number: "",
    gender: "male",
  });

  const [address, setAddress] = useState({
      add: "",
      state: "",
      city: "",
      pinCode: "",
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${BE_URL}/user/signUp`, { ...data, address: [address] })
      .then((res) => {
        console.log("🚀 ~ file: SignUp.jsx:56 ~ .then ~ res:", res.data);
        dispatch(login(res.data));
        navigate("/");
        props.toggle();
      })
      .catch((err) => {
        console.log("🚀 ~ file: SignUp.jsx:62 ~ onSubmit ~ err:", err);
        toast.error(err.message);
      });

    console.log({ ...data, address: [address] });
  };

  const modalHandler = () => {
    props.toggle();
    props.setModal(true);
  };
  return (
    <>
      <Modal isOpen={props.modal} toggle={props.toggle} {...props}>
        <ModalBody>
          <div className="p-4">
            <div className="d-flex  justify-center">
              <img
                src="../../../../img/logo.png"
                alt=""
                style={{ maxHeight: "70px" }}
              />
            </div>
            <hr />
            <h3 className="Auth-form-title mt-4">Create Account</h3>
            <MDBRow className="mb-4">
              <MDBCol>
                <MDBInput
                  id="form6Example1"
                  label="First name"
                  onChange={(e) => setData({ ...data, name: e?.target?.value })}
                />
              </MDBCol>
            </MDBRow>
            <MDBInput
              wrapperClass="mb-4"
              type="email"
              id="form6Example5"
              label="Email"
              onChange={(e) => setData({ ...data, email: e?.target?.value })}
            />
            <MDBInput
              wrapperClass="mb-4"
              type="password"
              id="form6Example5"
              label="password"
              onChange={(e) => setData({ ...data, password: e?.target?.value })}
            />
            <MDBInput
              wrapperClass="mb-4"
              type="phone"
              id="form6Example6"
              label="Phone"
              onChange={(e) => setData({ ...data, number: e?.target?.value })}
            />
            <div className="d-md-flex ustify-content-start align-items-center mb-4">
              <h6 className="fw-bold mb-0 me-4">Gender: </h6>
              <MDBRadio
                id="inlineRadio1"
                checked={data.gender === "female"}
                label="Female"
                onChange={() => setData({ ...data, gender: "female" })}
                inline
              />
              <MDBRadio
                checked={data.gender === "male"}
                id="inlineRadio2"
                label="Male"
                onChange={() => setData({ ...data, gender: "male" })}
                inline
              />
            </div>

            <MDBInput
              wrapperClass="mb-4"
              label="Street Name"
              onChange={(e) =>
                setAddress({ ...address, add: e?.target?.value })
              }
            />
            <div className="d-flex bd-highlight mb-3 p-0">
              <Select
                placeholder="State"
                className=" w-50 me-1 bd-highlight"
                onChange={(e) => setAddress({ ...address, state: e?.value })}
                options={options}
              />
              <Select
                placeholder="City"
                className=" w-50 ms-1 bd-highlight"
                onChange={(e) => setAddress({ ...address, city: e?.value })}
                options={options2}
              />
            </div>

            <MDBInput
              wrapperClass="mb-4"
              id="form6Example4"
              label="Zip Code"
              onChange={(e) =>
                setAddress({ ...address, pinCode: e?.target?.value })
              }
            />

            <MDBCheckbox
              className="d-flex justify-content-center mb-4"
              id="form6Example8"
              label="Create an account?"
              defaultChecked
            />
            <MDBBtn
              className="mb-4"
              type="submit"
              block
              onClick={(e) => onSubmit(e)}
            >
              Submit
            </MDBBtn>
            <NavLink
              onClick={modalHandler}
              className="ms-2 d-flex justify-content-center"
            >
              Exisiting User? Log in
            </NavLink>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

// name:  "urvish",
// email: "uv@gmail.com",
// number: "7575083084",
// password: "123456",
// age: 23,
// address: [
//   {
//     add:"A-308 abc",
//     city: "surat",
//     state: "gujrat",
//     pinCode: "395007",
//   },
// ],
