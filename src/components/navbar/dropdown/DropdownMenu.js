import React from "react";
import { Menu, Dropdown } from "antd";
import Avatar from "antd/lib/avatar/avatar";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">
        Signed in As <br /> Muhammad Zohaib
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a href="#">Your Gists</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="#">Stared Gists</a>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="#">Create A Gist</a>
    </Menu.Item>
    <Menu.Item key="4">
      <a href="#">Help</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="5">
      <a href="#"> Your Github Profile</a>
    </Menu.Item>
    <Menu.Item key="6">
      <a href="#"> SignOut</a>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => {
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
      <Avatar size={64}  /> 
      </a>
    </Dropdown>
  );
};

export default DropdownMenu;
