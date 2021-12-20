import styled from "styled-components";

export const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  margin: 10px auto;
  padding: 100px 100px 100px 100px;

  Input {
    margin-top:20px;
  }
  TextArea{
    margin-top:20px;
    margin-bottom:20px;
  }
  Button{
    background : #5acba1;
    border: none;
    margin-top:20px;
    width:100%;
    color:white;
    &:hover{
      background : white;
      color: green;
      transition:0.3s ease-in-out;
      border: 1px solid green;
    }
  }
`;
export const Heading = styled.h1`
  font-size: 30px;
  text-align: center;
`;