import React from 'react'
import {Button,Form , Input} from './style';

const Login = () => {
    return (
        <Form>
        <Input
          type="text"
          placeholder="Enter username"
        />

        <Button type="submit">
          Login
        </Button>
      </Form>
    )
}

export default Login;
