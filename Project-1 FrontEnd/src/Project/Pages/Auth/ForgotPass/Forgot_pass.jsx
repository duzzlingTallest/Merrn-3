import React from "react";

export default function Forgot_pass() {
  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h1>
              <img src="../../../../img/logo.png" alt="" />
            </h1>
            <h3 className="Auth-form-title mt-4">Forgot Password</h3>
            
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary mt-4 mb-4">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
