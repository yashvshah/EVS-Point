import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [contactNo, setcontactNo] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  function saveData() {
    if (firstName.length === 0) {
      alert("First name is requied");
    } else if (lastName.length === 0) {
      alert("Last name is requied");
    } else if (email.length === 0) {
      alert("Email is requied");
    } else if (contactNo.length === 0) {
      alert("Contact Number is requied");
    } else if (password.length === 0) {
      alert("please enter your password");
    } else if (confirmPassword.length === 0) {
      alert("please re-enter your password");
    } else if (confirmPassword !== password) {
      alert("Password and Comfirm password are not match");
    } else {
      let data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        contactNo: contactNo,
        password: password,
        confirmPassword: confirmPassword,
      };

      fetch("https://evs1owner.herokuapp.com/owner/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIffsInR5cCI6IkpXVCJ1.eyJ1c2VySWQiOiI2MWJjNWRlMzEyODRlN2ZjYTM3OGMwMzAiLCJffpYXQiOjE2Mzk3MzQ3NTV2.bHygAffPHN6AUUldKvEyvLLdtWvjGYPdaxjtrPnYw88Vo",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => console.log(result.token));
    }
  }
  return (
    <>
      <div className="container-fluid">
        <h2 className="p-3">Register</h2>
        <form className="form-input">
          <div className="p-3">
            <input
              type="text"
              name="fname"
              placeholder="First Name*"
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
            />
          </div>
          <div className="p-3">
            <input
              type="text"
              name="lname"
              placeholder="Last Name*"
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
            />
          </div>
          <div className="p-3">
            <input
              type="text"
              name="lname"
              placeholder="Email*"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div className="p-3">
            <input
              type="text"
              name="mobile"
              placeholder="Mobile no*"
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
                setpassword(e.target.value);
              }}
            />
          </div>
          <div className="p-3">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setconfirmPassword(e.target.value);
              }}
            />
          </div>
        </form>
        <Link to="/">
          <button type="button" className="btn btn-success" onClick={saveData}>
            Ragistration Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default Register;
