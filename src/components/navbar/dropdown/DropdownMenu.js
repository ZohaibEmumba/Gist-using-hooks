import React,{ useContext } from "react";
import { Menu, Dropdown } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import TabContext from "../../../context/tabs/TabContext";




const DropdownMenu = () => {
  const {tab , setTab} = useContext(TabContext);
  const menu = (
  
    <Menu>
      <Menu.Item key="0" >
        <a href="#">
          Signed in As <br /> Muhammad Zohaib
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1" onClick={() => { 
        setTab(4)
        }}>
        <a href="#">Your Gists</a>
      </Menu.Item>
      <Menu.Item key="2" onClick={() => { 
        setTab(5)
        }}>
        <a href="#">Stared Gists</a>
      </Menu.Item>
      <Menu.Item key="3" onClick={() => { 
        setTab(6)
        }}>
        <a href="#">Create A Gist</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="#">Help</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="5" onClick={() => { 
        setTab(7)
        }}>
        <a href="#"> Your Github Profile</a>
      </Menu.Item>
      <Menu.Item key="6" onClick={() => { 
        setTab(8);
        localStorage.clear();
        }}>
        <a href="#"> SignOut</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a className="ant-dropdown-link" onClick={(e) =>
        {
          e.preventDefault()
        } }>
      <Avatar size={64}  /> 
      </a>
    </Dropdown>
  );
};

export default DropdownMenu;
