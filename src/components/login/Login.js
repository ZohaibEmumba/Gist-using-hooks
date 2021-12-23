import React, { useCallback, useContext, useState } from "react";
import { FormDiv } from "./style";
import { loginAuthUser } from "../../utils/fetchAPIs";
import { GistContext } from "../../context/GistContext";
import { Button, Input, Form, Alert } from "antd";
import { openNotification, loginInputFormRules } from "../../utils/loginUtils";

const Login = () => {
  const [name, setName] = useState("");
  const {state, dispatch } = useContext(GistContext);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  const loginAuth = () => {
    const { PAT } = state;
    dispatch({
      type: "LOGIN",
      payload: {
        userName: name,
      },
    });

    loginAuthUser(name)
      .then((resp) => {
        if (resp?.login === name) {
          localStorage.setItem("authUserName", JSON.stringify(resp?.login));
          localStorage.setItem("token", JSON.stringify(PAT));
          openNotification();
          dispatch({
            type: "VISIBLESCREEN",
            payload: {
              tab: 3,
              gistID: null,
            },
          });
        }
      })
      .catch(() => setShowError(true));
  };
  const clearInput = useCallback(() => {
    setName("");
    setShowError(false);
  }, [name, showError]);

  const displayError = showError ? (
    <Alert message="Wrong Username..." type="error" />
  ) : null;

  return (
    <>
      <FormDiv>
        <Form onFinish={loginAuth} autoComplete="off">
          {displayError}
          <Form.Item
            name="username"
            rules={loginInputFormRules(true, "username")}
          >
            <Input
              size="large"
              placeholder="Enter username"
              value={name}
              onChange={handleInputChange}
              onFocus={clearInput}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" size="large" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </FormDiv>
    </>
  );
};

export default Login;
