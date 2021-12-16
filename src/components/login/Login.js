import React, { useContext, useState } from "react";
import { Button, Form, Input } from "./style";
import { loginAuthUser } from "../../utils/fetchAPIs";
import { GistContext } from "../../context/GistContext";

const Login = () => {
  const [name, setName] = useState("")
  const { state , dispatch } = useContext(GistContext);


  const login = (e) => {
    e.preventDefault();
    const {PAT} = state;
    dispatch({
        type: "LOGIN",
        payload : {
          userName : name
        }
    })
    
    const val = loginAuthUser(name).then((data) => {
      const { login } = data;
      if (login === name) {
        localStorage.setItem("authUserName", JSON.stringify(login));
        localStorage.setItem("token", JSON.stringify(PAT));
        dispatch({
          type: "VISIBLESCREEN",
          payload : {
            tab: 3,
            gistID : null
          }
        })
      } 
      else {
        alert("sorry Wrong username....");
      }
    });
  };
  return (
    <>
      <Form>
        <Input
          type="text"
          placeholder="Enter username"
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="submit" onClick={login}>
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
