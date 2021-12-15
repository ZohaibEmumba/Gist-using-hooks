import Navbar from "./components/navbar/Navbar";
import React, { createContext, useState } from "react";
import "./App.css";

export const screenContext = createContext(null);
export const loginContext = createContext({
  userName: "Zohaibkhattak15",
  isLoggedIn: false,
});

const App = () => {
  const [showPage, setShowPage] = useState(false);
  const [userLogin, setUserLogin] = useState(loginContext);

  return (
    <>
      <div className="ui container">
        <screenContext.Provider value={{ showPage, setShowPage }}>
          <loginContext.Provider value={{ userLogin, setUserLogin }}>
            <Navbar />{" "}
          </loginContext.Provider>
        </screenContext.Provider>
      </div>
    </>
  );
};

export default App;
