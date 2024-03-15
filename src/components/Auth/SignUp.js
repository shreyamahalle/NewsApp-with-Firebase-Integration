import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      navigate("/");
    } catch (err) {
      console.log(err);
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
              NEWS APP
            </h3>
          </div>
          <div style={{ marginTop: "3px" }}>
            <p style={{ fontSize: "25px", fontFamily: "monospace" }}>
              Create New Account
            </p>
            <div style={{ marginTop: "3px" }}>
              <Form.Control
                type="text"
                name="username"
                value={data.username}
                onChange={onChangeHandler}
                placeholder="UserName"
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
                type="email"
                name="email"
                value={data.email}
                onChange={onChangeHandler}
                placeholder="Email"
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
                type="submit"
                onClick={submitHandler}
              >
                Submit
              </Button>
            </div>
            <div style={{ marginTop: "3px", display: "flex" }}>
              <p style={{ color: "black", marginRight: "2px" }}>
                Already Have an Account
              </p>
              <Link
                to="/login"
                style={{ fontStyle: "italic", color: "#6B62FF" }}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
