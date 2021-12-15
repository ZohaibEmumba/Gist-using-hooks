import React,{useState , useContext} from 'react'
import {Button,Form , Input} from './style';
import {loginAuthUser} from '../../utils/fetchAPIs'; 
import TabContext from '../../context/tabs/TabContext';


const Login = () => {
  const [userName, setUserName] = useState("");
  const {setTab} = useContext(TabContext);


  const login = (e) =>{
      e.preventDefault();
      const val = loginAuthUser(userName).then(data => {
        console.log(data)
        const {login} = data ;
        if(login === userName)
        {
          localStorage.setItem("authUserName",JSON.stringify(userName));
          setTab(3)
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
