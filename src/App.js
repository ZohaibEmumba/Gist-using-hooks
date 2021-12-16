import Navbar from "./components/navbar/Navbar";
import React, { useContext, useEffect , useReducer } from "react";
import MainPage from "./components/mainpage/MainPage";
import Login from "./components/login/Login";
import HomePage from "./components/HomePage/HomePage";
import StaredGists from "./components/stargists/StarGists";
import CreateAGist from "./components/createagist/CreateAGist";
import GitHubProfilePage from "./components/githubprofilepage/GitHubProfilePage";
import UniqueGist from "./components/common/uniquegist/UniqueGist";
import FilterGists from "./components/filtergists/FilterGists";
import EditAGist from "./components/editagist/EditAGist";

import { GistReducer , initialState , GistContext} from './context/GistContext';
import "./App.css";



const App = () => {
  
  const [state, dispatch] = useReducer(GistReducer , initialState);
  const {tab} = state

  return (
    <>
    <GistContext.Provider value={{state, dispatch}}>
      <div className="ui container">
        <Navbar />
        {tab === 1 && <MainPage />}
        {tab === 2 && <Login />}
        {tab === 3 && <HomePage />}
        {tab === 5 && <StaredGists />}
        {tab === 6 && <CreateAGist />}
        {tab === 7 && <GitHubProfilePage />}
        {tab === 8 && <MainPage />}
        {tab === 9 && <UniqueGist />}
        {tab === 10 && <FilterGists />}
        {tab === 11 && <EditAGist />}

        {/*       
        {tab === 4 && <HomePage />}
         */}
      </div>
      </GistContext.Provider>
    </>
  );
};

export default App;
