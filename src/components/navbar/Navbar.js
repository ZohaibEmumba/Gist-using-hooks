import React, { useContext } from "react";
import { Nav, Button, Imgdiv, SearchDiv } from "./style";
import Logo from "../../assets/emumba-logo.png";
import SearchBar from "./searchbar/SearchBar";
import Login from "../login/Login";
import { screenContext } from "../../App";
import DropdownMenu from "./dropdown/DropdownMenu";


const Navbar = () => {
  const { showPage, setShowPage } = useContext(screenContext);

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
            onClick={() => setShowPage(false)}
          />{" "}
        </Imgdiv>
        <SearchDiv>
          <SearchBar />
          {"zohaibKhattak15" === "" ? (
              <DropdownMenu />
            ) : (
          <Button onClick={() => setShowPage(true)}>Login</Button>
            )} 
        </SearchDiv>
      </Nav>
      {showPage ? <Login /> : null}
    </section>
  );
};
export default Navbar;
