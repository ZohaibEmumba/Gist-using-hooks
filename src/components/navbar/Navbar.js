import { Nav, Button, Imgdiv, SearchDiv } from "./style";
import Logo from "../../assets/emumba-logo.png";
import SearchBar from "./searchbar/SearchBar";
import Login from "../login/Login";
import { useState } from "react";

const Navbar = () => {
  const [showLogin, setshowLogin] = useState(false);

  function showLoginPage() {
    setshowLogin(true);
  }

  return (
    <section>
      <Nav>
        <Imgdiv>
          {" "}
          <img src={Logo} alt="Emumba" width="150px" height="30px" onClick={() => setshowLogin(false)}/>{" "}
        </Imgdiv>
        <SearchDiv>
          <SearchBar />
          {/* {userName === myUserName ? (
              <Dropdown />
            ) : ( */}
          <Button onClick={showLoginPage}>Login</Button>
          {/* )} */}
        </SearchDiv>
      </Nav>
      {showLogin ? <Login /> : null}
    </section>
  );
};
export default Navbar;
