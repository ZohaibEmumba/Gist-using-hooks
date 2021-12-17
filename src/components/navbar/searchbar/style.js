import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-around;
  Input{  
    &:hover{
    border : 1px solid #5acba1
  }

`;

export const Input = styled.input`
  padding: 15px 200px 15px 20px;
  background-color: #5acba1;
  border: 1px solid white;
  color: white;
  transition: 0.3s ease;
  border-radius: 5px;
`;

export const Icon = styled.i`
  position: relative;
  top: 20px;
  right: 40px;
  cursor: pointer;
  color: white;
`;
