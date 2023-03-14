import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const host = "http://localhost:3001";

  let navigate = useNavigate();

  const [credentails, setCredentails] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentails.email,
        password: credentails.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);

      navigate("/");
      props.showAlert("Logged in Successfully", "success");
    } else {
      // alert("Invalid credentails");
      props.showAlert("Invalid Credentails", "danger");
    }
  };

  const onChange = (e) => {
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentails.email}
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentails.password}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          LogIn
        </button>
      </form>
    </div>
  );
};

export default Login;
