import React, { useContext, useState } from "react";
import { Form } from "./style";
import { loginAuthUser } from "../../utils/fetchAPIs";
import { GistContext } from "../../context/GistContext";
import { Button , Input } from "antd";


const Login = () => {
  const [name, setName] = useState("");
  const { state, dispatch } = useContext(GistContext);

  const login = (e) => {
    e.preventDefault();
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
          dispatch({
            type: "VISIBLESCREEN",
            payload: {
              tab: 3,
              gistID: null,
            },
          });
        }
      })
      .catch((error) => alert("Wrong username............."));
  };
  return (
    <>
      <Form>
        <Input
          type="text"
          size="large"
          placeholder="Enter username"
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="primary" size="large" onClick={login}>
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
