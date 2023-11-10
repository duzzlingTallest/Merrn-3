import React from "react";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

import { Modal, ModalBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Redux/features/authSlice";
import { useNavigate } from "react-router-dom";

export default function Profile(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  

  function logoutHandler() {
    dispatch(logout());
    console.log("----->");
    navigate("/");
    props.toggle();
  }

  return (
    <Modal isOpen={props.modal} toggle={props.toggle} {...props}>
      <ModalBody>
        {" "}
        <MDBCard style={{ borderRadius: "15px" }}>
          <MDBCardBody className="text-center">
            <div className="mt-3 mb-4 d-flex justify-content-center">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                className="rounded-circle "
                fluid
                style={{ width: "100px" }}
              />
            </div>
            <MDBTypography tag="h4">{user.name}</MDBTypography>
            <MDBCardText className="text-muted mb-4">
              {user.email} <span className="mx-2">|</span>{" "}
              <a href="#!">{user.number}</a>
            </MDBCardText>
            <div className="mb-4 pb-2">
              <MDBBtn outline floating>
                <MDBIcon fab icon="facebook" size="lg" />
              </MDBBtn>
              <MDBBtn outline floating className="mx-1">
                <MDBIcon fab icon="twitter" size="lg" />
              </MDBBtn>
              <MDBBtn outline floating>
                <MDBIcon fab icon="skype" size="lg" />
              </MDBBtn>
            </div>
            <MDBBtn onClick={() => logoutHandler()} rounded size="lg">
              LOG OUT
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </ModalBody>
    </Modal>
  );
}
