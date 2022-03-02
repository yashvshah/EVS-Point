import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [contactNo, setcontactNo] = useState("");
  const [password, setPassword] = useState("");

  function saveDataget() {
    let data = { contactNo, password };
    fetch("https://evs1owner.herokuapp.com/owner/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
          "Authorization":
            "Bearer eyJhbGciOiJIUzI1NiIffsInR5cCI6IkpXVCJ1.eyJ1c2VySWQiOiI2MWJjNWRlMzEyODRlN2ZjYTM3OGMwMzAiLCJffpYXQiOjE2Mzk3MzQ3NTV2.bHygAffPHN6AUUldKvEyvLLdtWvjGYPdaxjtrPnYw88Vo",
          "Accept": "*/*",
          "Accept-Encoding": "gzip, deflate, br",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((result) => console.log(result.token));
  }
  return (
    <>
      <div className="container-fluid">
        <h2 className="p-3">Welcome!</h2>
        <form className="form-input">
          <div className="p-3">
            <input
              type="text"
              name="mobile"
              placeholder="Enter Your Number"
              value={contactNo}
              onChange={(e) => {
                setcontactNo(e.target.value);
              }}
            />
          </div>
          <div className="p-3">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </form>
        <p>
        <Link to="/resetpass">Forget Password?</Link>
        </p>
        <Link to="/deshboard">
        <button type="button" className="btn btn-success" onClick={saveDataget}>
          Log In
        </button>
        </Link>
      </div>
      <p><Link to="/register">Don't have Account?</Link></p>
    </>
  );
};

export default Login;
