import Navbar from "./components/navbar/Navbar";
import React, { useContext, useEffect } from "react";
import  TabContext  from "./context/tabs/TabContext";
import MainPage from "./components/mainpage/MainPage";
import Login from './components/login/Login'
import "./App.css";
import HomePage from "./components/HomePage/HomePage";

// export const loginContext = createContext({
//   userName: "Zohaibkhattak15",
//   isLoggedIn: false,
// });

const App = () => {

  const {tab} = useContext(TabContext);
  
  useEffect(() => {
    console.log(tab)
  }, [])

  return (
    <>
      <div className="ui container">
        <Navbar />{" "}
        {tab  === 1 && <MainPage /> }
        {tab  === 2 && <Login /> }
        {tab === 3 && <HomePage />}
      </div>
    </>
  );
};

export default App;
