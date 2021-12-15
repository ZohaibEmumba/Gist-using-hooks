import React,{useState} from "react";
import TabContext from "./TabContext";

const TabState = (props) => {
  const [tab, setTab] = useState(1)

  return (
    <TabContext.Provider value={{tab,setTab}}>{props.children}</TabContext.Provider>
  );
};

export default TabState;
