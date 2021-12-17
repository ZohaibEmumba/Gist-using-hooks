import styled from "styled-components";

export const Button = styled.button`
  margin: 10px auto;
  padding: 5px 40px 5px 40px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #5acba1;
  color: white;
  cursor: pointer;
  align-items: center;
  align-self: center;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 35%;
  margin: 150px auto;
  padding: 50px 50px;
  border: 2px solid #5acba1;
  
  Input{  
    margin: 20px auto;
    &:hover{
    border : 1px solid #5acba1
  }
  }
  Button{
    background: #5acba1;
    border: none;
  }
`;

export const Input = styled.input`
  margin: 30px auto;
  padding: 15px 170px 15px 20px;
  border: 2px solid lightgray;
  align-self: center;
`;
