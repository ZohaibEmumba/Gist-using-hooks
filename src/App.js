import React, { useReducer , createContext } from "react";
import Navbar from "./components/navbar/Navbar";
import CreateGistForm from "./pages/CreateGistScreen";
import LoginScreen from "./pages/LoginScreen";
import EdistGistScreen from "./pages/EdistGistScreen";
import StarGistScreen from "./pages/StarGistScreen";
import UniqueGistScreen from "./pages/UniqueGistScreen";
import GistProfileScreen from "./pages/GistProfileScreen";
import ListPrivateGistsScreen from "./pages/ListPrivateGistsScreen";
import SearchGistScreen from "./pages/SearchGistScreen";
import ListsPublicGistScreen from "./pages/ListsPublicGistScreen";
import { GistReducer, initialState } from "./context/GistContext";
import "./App.css";

export const GistContext = createContext();


const App = () => {
  const [state, dispatch] = useReducer(GistReducer, initialState);
  const { tab } = state;

  const displayScreenTabs = (() => {
            
    switch (tab) {
      case 1:
        return <ListsPublicGistScreen />;
      case 2:
        return <LoginScreen />;
      case 3:
        return <ListPrivateGistsScreen />;
      case 5:
        return <StarGistScreen />;
      case 6:
        return <CreateGistForm />;
      case 7:
        return <GistProfileScreen />;
      case 8:
        return <ListsPublicGistScreen />;
      case 9:
        return <UniqueGistScreen />;
      case 10:
        return <SearchGistScreen />;
      case 11:
        return<EdistGistScreen />;
      default:
        return <ListsPublicGistScreen />;
    }
  })();

  return (
    <>
      <GistContext.Provider value={{ state, dispatch }}>
        <div className="ui container">
          <Navbar />
          {displayScreenTabs}
        </div>
      </GistContext.Provider>
    </>
  );
};

export default App;
