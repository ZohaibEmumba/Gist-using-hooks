import React, { useContext, useState } from "react";
import { FormDiv } from "./style";
import { loginAuthUser } from "../../utils/fetchAPIs";
import { GistContext } from "../../context/GistContext";
import { Button, Input, Form , Alert ,notification } from "antd";

const Login = () => {
  const [name, setName] = useState("");
  const { state, dispatch } = useContext(GistContext);
  const [showError, setShowError] = useState(false);

  const openNotification = () => {
    const args = {
      message: 'Login',
      description:
        'Login Successfully...',
      duration: 0,
    };
    notification.success(args);
  };

  const loginAuth = () => {
    const { PAT } = state;
    dispatch({
      type: "LOGIN",
      payload: {
        userName: name,
      },
    });

    const val = loginAuthUser(name)
      .then((data) => {
        const { login } = data;
        if (login === name) {
          localStorage.setItem("authUserName", JSON.stringify(login));
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
      .catch((error) => setShowError(true));
  };
  return (
    <>
      <FormDiv>
        <Form onFinish={loginAuth}
        autoComplete="off"
        >
          {showError ? <Alert message="Wrong Username..." type="error" /> : null}
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={()=> {
                setName("");
                setShowError(false);
              }}
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
