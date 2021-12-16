import React, { useContext } from "react";
import { Nav, Button, Imgdiv, SearchDiv } from "./style";
import Logo from "../../assets/emumba-logo.png";
import SearchBar from "./searchbar/SearchBar";
import DropdownMenu from "./dropdown/DropdownMenu";
import { GistContext } from "../../context/GistContext";

const Navbar = () => {
  const { dispatch } = useContext(GistContext);

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
            onClick={() =>
              dispatch({
                type: "VISIBLESCREEN",
                payload: {
                  tab: 1,
                  gistID: null,
                },
              })
            }
          />{" "}
        </Imgdiv>
        <SearchDiv>
          <SearchBar />
          {JSON.parse(localStorage.getItem("authUserName")) ===
          "Zohaibkhattak15" ? (
            <DropdownMenu />
          ) : (
            <Button onClick={() =>
              {
                dispatch({
                  type:"VISIBLESCREEN",
                  payload: {
                    tab: 2,
                    gistID:null
                  }
                })
              } 
            }>Login</Button>
          )}
        </SearchDiv>
      </Nav>
    </section>
  );
};
export default Navbar;
