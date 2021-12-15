import React from "react";
import { Nav, Button, Imgdiv, SearchDiv } from "./style";
import Logo from "../../assets/emumba-logo.png";
import SearchBar from "./searchbar/SearchBar";
import DropdownMenu from "./dropdown/DropdownMenu";
import { useContext } from "react/cjs/react.development";
import TabContext from "../../context/tabs/TabContext";

const Navbar = () => {
  const { setTab } = useContext(TabContext);

  return (
    <section>
      <Nav>
        <Imgdiv>
          {" "}
          <img
            src={Logo}
            alt="Emumba"
            width="150px"
            height="30px"
            onClick={() => setTab(1)}
          />{" "}
        </Imgdiv>
        <SearchDiv>
          <SearchBar />
          {JSON.parse(localStorage.getItem("authUserName")) ===
          "Zohaibkhattak15" ? (
            <DropdownMenu />
          ) : (
            <Button onClick={() => setTab(2)}>Login</Button>
          )}
        </SearchDiv>
      </Nav>
    </section>
  );
};
export default Navbar;
