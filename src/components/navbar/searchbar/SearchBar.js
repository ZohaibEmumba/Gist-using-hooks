import React, { useState, useContext } from "react";
import { GistContext } from "../../../context/GistContext";
import { Div } from "./style";
import { Input } from "antd";

const { Search } = Input;

const SearchBar = () => {
  const [value, setValue] = useState("");

  const { dispatch } = useContext(GistContext);
  const searchGists = () => {
    dispatch({
      type: "SEARCH",
      payload: {
        searchValue: value,
        tab: 10,
      },
    });
    setValue("");
  };
  return (
    <Div>
      <Search
        placeholder="Enter search text"
        size="large"
        onChange={(e) => setValue(e.target.value)}
        onSearch={searchGists}
      />
    </Div>
  );
};

export default SearchBar;
