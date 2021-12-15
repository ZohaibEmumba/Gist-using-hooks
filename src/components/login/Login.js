import React,{useState , useContext} from 'react'
import {Button,Form , Input} from './style';
import {loginAuthUser} from '../../utils/fetchAPIs'; 
import { screenContext } from '../../App';


const Login = () => {
  const [userName, setUserName] = useState("");
  const { showPage, setShowPage } = useContext(screenContext);

  const login = (e) =>{
      e.preventDefault();
      const val = loginAuthUser(userName).then(data => {
        console.log(data)
        const {login} = data ;
        if(login === "")
        {
          
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
