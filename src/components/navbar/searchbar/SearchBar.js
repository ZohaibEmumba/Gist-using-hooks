import React, { useState, useContext } from "react";
import { GistContext } from "../../../context/GistContext";
import { Div  } from "./style";
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = () => {
  const [value, setValue] = useState("");

  const {dispatch} = useContext(GistContext);
  const searchGists = () => {
    dispatch({
      type:"SEARCH",
      payload :{
        searchValue: value,
        tab: 10
      }
    })
  }
  return (
    <Div>
      {/* <Input
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
      /> */}
      <Search placeholder="Enter search text" onChange={(e) => setValue(e.target.value)}  onSearch={searchGists} />
    </Div>
  );
};

export default SearchBar;
