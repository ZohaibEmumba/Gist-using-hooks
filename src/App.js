import React, { useReducer } from "react";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import StaredGists from "./components/stargists/StarGists";
import CreateAGist from "./components/createagist/CreateAGist";
import GitHubProfilePage from "./components/githubprofilepage/GitHubProfilePage";
import UniqueGist from "./components/common/uniquegist/UniqueGist";
import SearchGists from "./components/searchusergists/SearchGists";
import EditAGist from "./components/editagist/EditAGist";
import PrivateGists from "./components/privategistslist/PrivateGists";
import PublicGists from "./components/publicgistslist/PublicGists";
import { GistReducer, initialState, GistContext } from "./context/GistContext";
import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(GistReducer, initialState);
  const { tab } = state;

  return (
    <>
      <GistContext.Provider value={{ state, dispatch }}>
        <div className="ui container">
          <Navbar />
          {tab === 1 &&  <PublicGists />}
          {tab === 2 &&  <Login />}
          {tab === 3 &&  <PrivateGists />}
          {tab === 5 &&  <StaredGists />}
          {tab === 6 &&  <CreateAGist />}
          {tab === 7 &&  <GitHubProfilePage />}
          {tab === 8 &&  <PublicGists />}
          {tab === 9 &&  <UniqueGist />}
          {tab === 10 && <SearchGists />}
          {tab === 11 && <EditAGist />}
        </div>
      </GistContext.Provider>
      {/*       
        {tab === 4 && <HomePage />}
         */}
    </>
  );
};

export default App;
