import { Button, Col, Form, Input } from "antd";
import React, { useState } from "react";
import {
  AuthFormWrap,
  CenteredSpinner,
  StyleRow,
  StyledLink,
  SupStyle,
} from "./Login.styles.js";
import { useAuth } from "../../../common/hooks/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import { showToastMessage } from "../../../../utils.js";
import "react-toastify/dist/ReactToastify.css";
import { HashLoader } from "react-spinners";
import LogoPage from "../../../common/Logo/logo.jsx";

function Login() {
  const [form] = Form.useForm();
  const a = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email || !password) {
      showToastMessage("error", "Enter both credentials",1000,1);
      return;
    }
    let obj = {
      email: email,
      password: password,
    };
    let res;
    try {
      setIsLoading(true);
      //console.log("loading ", isLoading);
      res = await a.login(obj);
      setIsLoading(false);
      if (res.data && res.data.success) {
        //trigger toastify to display logged in
        showToastMessage("success", "Login success", 2000,2);
        //console.log("Logged in");
        if(res.data.profile == false){
          showToastMessage("success", "Let us know about you", 5000,3);
          Navigate("/profile"); 
        }else{
        Navigate("/");
        }
      } else if (!res.data) {
        throw new Error("Error from server side");
      } else if (!res.data.success) {
        showToastMessage("error", "Wrong Credentials", 500,3);
      }
    } catch (error) {
      await showToastMessage("error", "Internal Server Error", 500,4);
    }
  };



  const handleValidation = async () => {
    try {
      const values = await form.validateFields();
      console.log(values)
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
          {/* <LogoPage/> */}
          <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
            <AuthFormWrap>
              <div className="ninjadash-authentication-top">
                <h2 className="ninjadash-authentication-top__title">
                  Welcome Back!
                </h2>
              </div>
              <div className="ninjadash-authentication-content">
                <Form name="login" form={form} layout="vertical">
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "Please input your Email!",
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
                      message: "Password must be a combination of letters and numbers!",
                    },
                  ]}
                    name="password"
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
                      Sign In
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <SupStyle>
                Don`t have an account?
                <StyledLink to="/signup"> Sign up</StyledLink>
              </SupStyle>
            </AuthFormWrap>
          </Col>
        </StyleRow>
      )}
    </>
  );
}

export default Login;
