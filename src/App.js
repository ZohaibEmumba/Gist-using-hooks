import Navbar from "./components/navbar/Navbar";
import "./App.css";
import React, { createContext, useState } from "react";
import TableData from "./components/common/table/TableData";

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
