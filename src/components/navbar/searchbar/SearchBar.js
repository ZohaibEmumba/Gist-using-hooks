import React, { useState, useContext } from "react";
import { GistContext } from "../../../context/GistContext";
import { Div, Input, Icon } from "./style";

const SearchBar = () => {
  const [value, setValue] = useState("");
  // const { setSearchValue } = useContext(SearchValueContext);
  // const { setTab } = useContext(TabContext);

  const {dispatch} = useContext(GistContext);

  return (
    <Div>
      <Input
        type="text"
        placeholder="Search Notes.."
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <Icon
        className="fas fa-search "
        onClick={() => {
          dispatch({
            type:"SEARCH",
            payload :{
              searchValue: value,
              tab: 10
            }
          })
          setValue("")
        }}
      />
    </Div>
  );
};

export default SearchBar;
