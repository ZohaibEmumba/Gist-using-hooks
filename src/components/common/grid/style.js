import styled from "styled-components";

export const Card = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin-left: 130px;
  cursor: pointer;
`;

export const Grid = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  margin-top: 30px;
  width: 25%;
  padding: 20px 20px;
  border-radius: 15px;
  box-shadow: 0px 5px 18px #c9c7c7;
`;

export const Footer = styled.div`
  display: flex;
  gap: 20px;
  border-top: 1px solid gray;
`;
export const Profile = styled.div`
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ProfileFooter = styled.span`
  :first-child {
    font-size: 10px;
    color: lightseagreen;
  }
`;

export const ProfilePic = styled.img`
  cursor: pointer;
  width: 80px;
  height: auto;
  background-color: white;
  border-radius: 50%;
  margin-top: 30px;
`;
