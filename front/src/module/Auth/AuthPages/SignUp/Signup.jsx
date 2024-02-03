import { Button, Col, Form, Input, Row } from "antd";
import React, { useState } from "react";
import {
  AuthFormWrap,
  CenteredSpinner,
  StyleRow,
  StyledLink,
  SupStyle,
} from "./Signup.styles.js";
import { useAuth } from "../../../common/hooks/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import { showToastMessage } from "../../../../utils.js";
import "react-toastify/dist/ReactToastify.css";
import { HashLoader } from "react-spinners";
import LogoPage from "../../../common/Logo/logo.jsx";

function Signup() {
  const [form] = Form.useForm();
  const a = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email || !password || !firstName || !lastName) {
      showToastMessage("error", "Enter both credentials", 1000, 1);
      return;
    }
    let obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    let res;
    try {
      setIsLoading(true);
      res = await a.signup(obj);
      setIsLoading(false);
      if (res.data && res.data.success) {
        showToastMessage("success", "Sign Up success", 1000, 5);
        Navigate("/profile");
      } else if (!res.data) {
        throw new Error("Error from server side");
      } else if (!res.data.success) {
        showToastMessage("error", "User with this email already exists", 4000, 6);
      }
    } catch (error) {
      await showToastMessage("error", "Internal Server Error", 500, 7);
    }
  };

  const handleValidation = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <>
      {isLoading ? (
        <CenteredSpinner>
          <HashLoader color="#c2185b" size={90} />
        </CenteredSpinner>
      ) : (
        <StyleRow justify="center" className="out">
          <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
            <AuthFormWrap>
              <div className="ninjadash-authentication-top">
                <h2 className="ninjadash-authentication-top__title">
                  Join us!
                </h2>
              </div>
              <div className="ninjadash-authentication-content">
                <Form name="signup" form={form} layout="vertical">
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        name="firstName"
                        rules={[
                          {
                            required: true,
                            message: "Please input your first name!",
                          },
                        ]}
                        label="First Name"
                      >
                        <Input
                          value={firstName}
                          onChange={(ev) => setFirstName(ev.target.value)}
                          placeholder="Taylor"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="lastName"
                        rules={[
                          {
                            required: true,
                            message: "Please input your last name!",
                          },
                        ]}
                        label="Last Name"
                      >
                        <Input
                          value={lastName}
                          onChange={(ev) => setLastName(ev.target.value)}
                          placeholder="Swift"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "Please input a valid Email!",
                        required: true,
                      },
                    ]}
                    label="Email Address"
                  >
                    <Input
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)}
                      placeholder="name@example.com"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      {
                        min: 8,
                        message: "Password must be at least 8 characters long!",
                      },
                      {
                        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message:
                          "Password must be a combination of letters and numbers!",
                      },
                    ]}
                    label="Password"
                  >
                    <Input.Password
                      value={password}
                      onChange={(ev) => setPassword(ev.target.value)}
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      onClick={handleSubmit}
                      className="btn-signin"
                      type="primary"
                      size="large"
                      disabled={!handleValidation()}
                    >
                      Sign Up
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <SupStyle>
                Already a user?
                <StyledLink to="/login"> Sign in </StyledLink>
              </SupStyle>
            </AuthFormWrap>
          </Col>
        </StyleRow>
      )}
    </>
  );
}

export default Signup;
