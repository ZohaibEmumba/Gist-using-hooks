import React, { useReducer } from "react";
import Navbar from "./components/navbar/Navbar";
import CreateGistForm from "./pages/CreateGistScreen";
import LoginScreen from "./pages/LoginScreen";
import EdistGistScreen from "./pages/EdistGistScreen";
import StarGistScreen from "./pages/StarGistScreen";
import UniqueGistScreen from "./pages/UniqueGistScreen";
import GistProfileScreen from "./pages/GistProfileScreen";


import PrivateGists from "./components/private-gists-list/PrivateGists";
import PublicGists from "./components/public-gists-list/PublicGists";
import { GistReducer, initialState, GistContext } from "./context/GistContext";
import "./App.css";
import SearchGistScreen from "./pages/SearchGistScreen";

const App = () => {
  const [state, dispatch] = useReducer(GistReducer, initialState);
  const { tab } = state;
  return (
    <>
      <GistContext.Provider value={{ state, dispatch }}>
        <div className="ui container">
          <Navbar />
          {tab === 1 && <PublicGists />}
          {tab === 2 && <LoginScreen />}
          {tab === 3 && <PrivateGists />}
          {tab === 5 && <StarGistScreen />}
          {tab === 6 && <CreateGistForm />}
          {tab === 7 && <GistProfileScreen />}
          {tab === 8 && <PublicGists />}
          {tab === 9 && <UniqueGistScreen />}
          {tab === 10 && <SearchGistScreen />}
          {tab === 11 && <EdistGistScreen />}
        </div>
      </GistContext.Provider>
    </>
  );
};

export default App;
