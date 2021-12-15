import React,{useState} from "react";
import StoreGistIdContext from "./StoreGistIdContext";

const StoreGistIdState = (props) => {
  const [gistId, setGistId] = useState(1)

  return (
    <StoreGistIdContext.Provider value={{gistId, setGistId}}>{props.children}</StoreGistIdContext.Provider>
  );
};

export default StoreGistIdState;