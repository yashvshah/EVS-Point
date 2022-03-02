import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResetPass = () => {
  const [contactNo, setcontactNo] = useState("");

  function saveDataget() {
    let data = { contactNo };
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
    }).then((resp) => resp.json())
    .then((result) => console.log(result.token));
  }
  return (
    <>
      <div className="container-fluid">
        <h2 className="p-3">Reset Password</h2>
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
        </form>
        <button
          type="button"
          className="btn btn-success"
          onClick={saveDataget}
        >
          Submit
        </button>
      </div>
      <Link to="/register">Create new Account?</Link>
    </>
  );
};

export default ResetPass;
