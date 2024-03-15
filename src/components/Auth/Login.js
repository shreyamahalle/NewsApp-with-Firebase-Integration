import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const onChangeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div
        style={{
          width: "880px",
          borderRadius: "30px",
          boxShadow: "2xl",
          padding: "50px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ width: "440px", padding: "10px" }}>
          <div style={{ textAlign: "center" }}>
            <h3
              style={{
                fontSize: "3xl",
                fontWeight: "900",
                fontFamily: "cursive",
                marginBottom: "7px",
                color: "#6B62FF",
              }}
            >
              News App
            </h3>
          </div>
          <div style={{ marginTop: "3px" }}>
            <p style={{ fontSize: "25px", fontFamily: "monospace" }}>
              Welcome Back
            </p>
            <div style={{ marginTop: "3px" }}>
              <Form.Control
                type="email"
                name="email"
                value={data.email}
                placeholder="Email"
                onChange={onChangeHandler}
                style={{
                  width: "100%",
                  height: "40px",
                  border: "1px solid #CCCCCC",
                  borderRadius: "0px",
                  boxShadow: "none",
                }}
              />
            </div>
            <div style={{ marginTop: "3px" }}>
              <Form.Control
                type="password"
                name="password"
                value={data.password}
                onChange={onChangeHandler}
                placeholder="Password"
                style={{
                  width: "100%",
                  height: "40px",
                  border: "1px solid #CCCCCC",
                  borderRadius: "0px",
                  boxShadow: "none",
                }}
              />
            </div>
            <div style={{ marginTop: "7px" }}>
              <Button
                variant="primary"
                style={{ width: "100%", borderRadius: "10px" }}
                onClick={submitHandler}
              >
                Login
              </Button>
            </div>
            <div style={{ display: "flex", marginTop: "3px" }}>
              <p style={{ color: "black", marginRight: "2px" }}>
                Create Account
              </p>
              <Link
                to="/signup"
                style={{
                  fontStyle: "italic",
                  color: "#6B62FF",
                  textDecoration: "none",
                }}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
