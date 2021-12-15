import React,{useState , useContext} from 'react'
import {Button,Form , Input} from './style';
import {loginAuthUser} from '../../utils/fetchAPIs'; 
import TabContext from '../../context/tabs/TabContext';


const Login = () => {
  const [userName, setUserName] = useState("");
  const {setTab} = useContext(TabContext);
  const [token, setToken] = useState("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")


  const login = (e) =>{
      e.preventDefault();
      const val = loginAuthUser(userName).then(data => {
        const {login} = data ;
        if(login === userName)
        {
          localStorage.setItem("authUserName", JSON.stringify(userName));
          localStorage.setItem("token"       , JSON.stringify(token));
          setTab(3);
        }
        else {
          alert("sorry Wrong username....");
        }
      })

  }
    return (
      <>
        <Form>
        <Input
          type="text"
          placeholder="Enter username"
          onChange={(e) =>  setUserName(e.target.value) }
        />

        <Button type="submit" onClick={login}>
          Login
        </Button>
      </Form>
      </>
    )
}

export default Login;
