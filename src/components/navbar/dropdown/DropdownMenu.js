import React, { useContext } from "react";
import { Menu, Dropdown } from "antd";
import Zohaib from "../../../assets/zohaib.png";


const DropdownMenu = () => {
  // const { tab, setTab } = useContext(TabContext);
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <p>
          Signed in As <br /> Muhammad Zohaib
        </p>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="1"
        // onClick={() => {
        //   setTab(4);
        // }}
      >
        <p>Your Gists</p>
      </Menu.Item>
      <Menu.Item
        key="2"
        // onClick={() => {
        //   setTab(5);
        // }}
      >
        <p>Stared Gists</p>
      </Menu.Item>
      <Menu.Item
        key="3"
        // onClick={() => {
        //   setTab(6);
        // }}
      >
        <p>Create A Gist</p>
      </Menu.Item>
      <Menu.Item key="4">
        <p>Help</p>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="5"
        // onClick={() => {
        //   setTab(7);
        // }}
      >
        <p> Your Github Profile</p>
      </Menu.Item>
      <Menu.Item
        key="6"
        // onClick={() => {
        //   setTab(8);
        //   localStorage.clear();
        // }}
      >
        <p> SignOut</p>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a
        className="ant-dropdown-link"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <img width="50px" height="50px" style={{borderRadius: '50%' , backgroundColor: 'white'}} src={Zohaib}  />
      </a>
    </Dropdown>
  );
};

export default DropdownMenu;
